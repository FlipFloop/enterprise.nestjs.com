window.addEventListener('load', function() {
  var headerHeight = document.querySelector('.page-header').clientHeight;
  var stickyNavbarElement = document.querySelector('.navbar-sticky');
  var offset = 300;

  toggleStickyNavbar();

  window.addEventListener('scroll', function() {
    toggleStickyNavbar();
  });

  function toggleStickyNavbar() {
    if (window.scrollY > headerHeight - offset) {
      return stickyNavbarElement.classList.add('visible');
    }
    stickyNavbarElement.classList.remove('visible');
  }

  registerNavigation();

  function registerNavigation() {
    var elements = document.querySelectorAll('.anchor');
    elements.forEach(function(el) {
      const href = el.getAttribute('href') || '';
      const isAnchor = href[0] === '#';
      if (!isAnchor) {
        return;
      }
      el.addEventListener('click', function(event) {
        if (!el.scrollIntoView) {
          return;
        }
        event.preventDefault();

        var targetElement = document.querySelector(el.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      });
    });
  }
});
