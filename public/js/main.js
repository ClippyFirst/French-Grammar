(function () {
  'use strict';
  // Мобільна навігація
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var opened = navMenu.hidden;
      navMenu.hidden = !opened;
      navToggle.setAttribute('aria-expanded', String(opened));
    });
  }

  // Головна пошукова коробка відкриває Pagefind modal
  var homeInput = document.querySelector('[data-search-input]');
  if (homeInput) {
    homeInput.addEventListener('click', function () {
      var trigger = document.querySelector('[data-pagefind-modal]');
      if (trigger) trigger.click();
    });
  }
})();