document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  if (!form) return;

  const nameField = document.getElementById('feedback-name-field');
  const nameInput = document.getElementById('feedback-name');
  const message = document.getElementById('feedback-message');
  const moduleSelect = document.getElementById('feedback-module');
  const categorySelect = document.getElementById('feedback-kind');
  const count = document.getElementById('feedback-character-count');
  const submit = document.getElementById('feedback-submit');
  const status = document.getElementById('feedback-status');
  const previewName = document.getElementById('feedback-preview-name');
  const previewAvatar = document.getElementById('feedback-preview-avatar');
  const previewModule = document.getElementById('feedback-preview-module');
  const previewCategory = document.getElementById('feedback-preview-category');
  const previewText = document.getElementById('feedback-preview-text');
  const wall = document.getElementById('feedback-wall-list');
  const empty = document.getElementById('feedback-wall-empty');
  const categories = {
    'I discovered': '💡 I discovered',
    'I have a question': '❓ I have a question',
    'I would change': '🔬 I would change',
    'Appreciation': '👏 Something worked well'
  };

  function anonymous() {
    return form.querySelector('input[name="visibility"]:checked').value === 'Anonymous';
  }

  function syncPreview() {
    const isAnon = anonymous();
    nameField.hidden = isAnon;
    nameInput.disabled = isAnon;
    nameInput.required = !isAnon;
    const chosenName = isAnon ? 'Anonymous' : (nameInput.value.trim() || 'Your name');
    previewName.textContent = chosenName;
    previewAvatar.textContent = isAnon ? 'A' : (chosenName.charAt(0).toUpperCase() || '?');
    previewModule.textContent = moduleSelect.value;
    previewCategory.textContent = categories[categorySelect.value] || categorySelect.value;
    previewText.textContent = message.value.trim() || 'Your message preview will appear here as you type.';
    count.textContent = message.value.length + ' / 700';
  }

  for (const field of form.querySelectorAll('input[name="visibility"]')) {
    field.addEventListener('change', syncPreview);
  }
  for (const field of [nameInput, message, moduleSelect, categorySelect]) {
    field.addEventListener('input', syncPreview);
    field.addEventListener('change', syncPreview);
  }

  function postElement(post) {
    const article = document.createElement('article');
    article.className = 'feedback-wall-post';
    const header = document.createElement('div');
    header.className = 'feedback-post-top';
    const avatar = document.createElement('span');
    avatar.className = 'feedback-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = (post.name || 'Anonymous').trim().charAt(0).toUpperCase() || 'A';
    const identity = document.createElement('div');
    const author = document.createElement('strong');
    author.textContent = post.name || 'Anonymous';
    const meta = document.createElement('small');
    meta.textContent = post.module || 'General feedback';
    identity.append(author, meta);
    header.append(avatar, identity);
    const type = document.createElement('span');
    type.className = 'feedback-post-category';
    type.textContent = categories[post.category] || post.category || 'Feedback';
    const body = document.createElement('p');
    body.className = 'feedback-post-body';
    body.textContent = post.message;
    const date = document.createElement('small');
    date.className = 'feedback-post-date';
    date.textContent = post.date || '';
    article.append(header, type, body, date);
    return article;
  }

  const approved = Array.isArray(window.FEEDBACK_POSTS)
    ? window.FEEDBACK_POSTS.filter(post => post && post.published === true && typeof post.message === 'string' && post.message.trim())
    : [];
  if (approved.length) {
    approved.slice().reverse().forEach(post => wall.appendChild(postElement(post)));
  } else {
    empty.hidden = false;
  }

  function announce(text, isError) {
    status.hidden = false;
    status.textContent = text;
    status.classList.toggle('feedback-status-error', Boolean(isError));
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements['_honey'].value) return;
    if (!anonymous() && !nameInput.value.trim()) {
      announce('Please enter the name you would like to display.', true);
      nameInput.focus();
      return;
    }

    const isAnon = anonymous();
    const displayName = isAnon ? 'Anonymous' : nameInput.value.trim();
    const payload = {
      _subject: 'ARU-CJLU Learning Lab feedback to moderate',
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      source_page: 'https://kirtiprakash.github.io/aru-cjlu-ai-2026/feedback.html',
      publication_choice: isAnon ? 'Anonymous' : 'Named',
      display_name: displayName,
      module: moduleSelect.value,
      category: categorySelect.value,
      message: message.value.trim(),
      consent_for_public_display_after_review: 'Yes'
    };
    if (payload.message.length < 8) {
      announce('Please write a little more about your experience.', true);
      message.focus();
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Submitting…';
    status.hidden = true;
    try {
      // Submissions are emailed to the coordinator for moderation.
      // No client-side token or API secret is required.
      const response = await fetch('https://formsubmit.co/ajax/kirti.prakash@aru.ac.uk', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(payload)
      });
      const reply = await response.json();
      if (!response.ok || reply.success === false || reply.success === 'false') {
        throw Error(reply.message || 'The feedback service could not accept your submission.');
      }
      form.reset();
      syncPreview();
      announce('Your message was submitted to the feedback service. It will only appear publicly if the coordinator receives and approves it. The form owner may need to activate the service first.', false);
    } catch (error) {
      announce('We could not confirm delivery. Please try again later or contact the teaching team. ' + (error.message || ''), true);
    } finally {
      submit.disabled = false;
      submit.textContent = 'Submit for review ↗';
    }
  });

  syncPreview();
});
