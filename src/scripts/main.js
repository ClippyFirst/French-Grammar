(() => {
  'use strict';

  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  const syncThemeControl = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', dark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
  };

  themeToggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
    syncThemeControl();
  });
  syncThemeControl();

  const closeNavigation = () => {
    if (!navToggle || !navMenu) return;
    navMenu.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Відкрити навігаційне меню');
  };

  navToggle?.addEventListener('click', () => {
    if (!navMenu) return;
    const open = navMenu.hidden;
    navMenu.hidden = !open;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Закрити навігаційне меню' : 'Відкрити навігаційне меню');
  });

  navMenu?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });

})();