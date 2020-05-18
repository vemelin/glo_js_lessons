const expandNav = () => document.querySelector('.popup-dialog-menu').classList.toggle('menu-toggle');

const mainNav = () => {
  const click = document.querySelector('.menu'),
        menu = document.querySelector('.popup-menu');

  click.addEventListener('click', () => {
      document.querySelector('.popup-menu').classList.toggle('visible');
      expandNav();
  });

  menu.addEventListener('click', event => {
      let target = event.target;
      if (target.classList.contains('close-menu') || !target.closest('.popup-dialog-menu')) {
        expandNav();
      }
  });
};

// export default mainNavAdaptive;
export default mainNav;