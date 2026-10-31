# Learning Lab: accepting and publishing feedback

This is a coordinator guide for `docs/feedback.html`. Do not put identifiable private submissions, email addresses, IP information, contact forms, or consent evidence into this public repository.

## How submissions reach the teaching team

The form is a static HTML/JavaScript page and sends a POST request to **FormSubmit.co**, addressed to `kirti.prakash@aru.ac.uk`. Students may select `Anonymous` or supply a preferred public display name; no email address or account is required by our form.

**One-time activation is required**: the coordinator needs to submit a test entry from the page once, then open the confirmation email from FormSubmit and approve the new form. Until then, delivery is unconfirmed. Check inbox and spam. Do not treat the page as active until a test submission is received and reviewed. FormSubmit is an external provider and may be unavailable on some networks; test access from CJLU/China, including mobile. If unavailable, replace the endpoint with an institutionally approved alternative.

The form uses a honeypot and no CAPTCHA, to reduce reliance on Google services, while all actual publication is manually moderated. The service can still handle technical metadata associated with submission. "Anonymous" means the person's name is not requested or displayed publicly, not complete technical anonymity.

## Moderator publication workflow

1. Receive feedback through the coordinator inbox, and check that the sender chose to allow public display after moderation.
2. Remove identifying/sensitive information about other students, staff, medical data, grades, email addresses and other personal details. If editing would change the meaning, seek permission for the revised wording or do not publish it.
3. Confirm the displayed name is exactly what the commenter chose (or "Anonymous"). Names are self-declared and not identity-verified; don't label them verified students.
4. Add a safe approved record to `docs/assets/js/feedback-data.js`. **Never copy raw private submissions or consent records into GitHub.**
5. Create a branch and pull request. The existing Website checks and review rules apply. After merging, the new feedback appears on the public wall automatically.
6. If a person requests removal or a correction, amend or delete the published record promptly, and take into account public Git history and cached copies.

Example of an **approved** record to add to the array (illustrative, not a real student response):

```javascript
window.FEEDBACK_POSTS = [
  {
    id: "feedback-2026-001",
    date: "2026-10-31",
    name: "Anonymous",
    module: "Semantic Data Technologies",
    category: "I would change",
    message: "Please include an additional exercise on SPARQL OPTIONAL queries.",
    published: true
  }
];
```

If a message is approved under a name, replace `Anonymous` with the consented public display name. Keep `published: true` only for reviewed messages. Display is done using safe `textContent` (not interpolated HTML). The public file is not an inbox or consent register.

## Optional later upgrade

A fully automatic submit-to-public feed would require a secure backend and moderation storage (for instance an institutionally approved comments platform). **Do not place GitHub access tokens or API credentials in browser JavaScript** and do not allow unreviewed submissions to commit to `main`.

This workflow is intentionally simple: submit privately, moderate, then publish publicly.
