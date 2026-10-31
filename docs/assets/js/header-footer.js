document.addEventListener('DOMContentLoaded', () => {
  const depth = document.body.dataset.depth === 'module' ? '../' : '';
  const page = document.body.dataset.page || '';
  const navLink = (href, label, key) => `<a href="${depth}${href}" ${page === key ? 'aria-current="page"' : ''}>${label}</a>`;
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');
  if (header) header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
      
        <a class="brand" href="${depth}index.html"
         aria-label="ARU and China Jiliang University home">
        <img
        src="${depth}assets/images/icons/aru-cjlu-logo2.png"
        alt="ARU and CJLU"
        class="brand-logo">
        </a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav class="site-nav" id="primary-nav" aria-label="Primary navigation">
          ${navLink('index.html', 'Home', 'home')}
          ${navLink('students.html', 'Students', 'students')}
          ${navLink('team.html', 'Teaching team', 'team')}
          ${navLink('modules/semantic-data-technologies.html', 'SDT', 'sdt')}
          ${navLink('modules/advanced-machine-learning.html', 'Advanced ML', 'aml')}
          ${navLink('modules/deep-learning.html', 'Deep learning', 'dl')}
          ${navLink('stories.html', 'Our Stories', 'stories')}
        </nav>
      </div>
    </header>`;
  if (footer) footer.innerHTML = `
    <footer class="site-footer">
      <div class="content">
        <div class="footer-grid">
          <div><h2>ARU × China Jiliang University</h2><p>A shared learning space for semantic data, advanced machine learning and deep learning.</p></div>
          <div><h3>Explore</h3><p><a href="${depth}students.html">Student cohort</a><br><a href="${depth}team.html">Teaching team</a><br><a href="${depth}permissions.html">Publication permissions</a></p></div>
          <div><h3>Modules</h3><p><a href="${depth}modules/semantic-data-technologies.html">SDT</a><br><a href="${depth}modules/advanced-machine-learning.html">Advanced ML</a><br><a href="${depth}modules/deep-learning.html">Deep learning</a><br><a href="${depth}stories.html">Our Stories</a></p></div>
        </div>
        <p class="footer-note"><small>This student-led project is not an official ARU or CJLU website. The website maintained by PinZhen You, Sihan Li and Kirti Prakash. © <span data-current-year></span> ARU × CJLU.</small></p>
      </div>
    </footer>`;
});
