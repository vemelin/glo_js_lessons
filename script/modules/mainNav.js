const mainNav = () => {

  const cta = document.querySelector('.menu'),
        modal = document.querySelector('.popup-dialog-menu'),
        hideNav = () => modal.style.cssText = 'transform: translateX(645px);'

  cta.addEventListener('click', () => modal.style.cssText = 'transform: translateY(0);');

  modal.addEventListener('click', event => {
    if (event.target.classList.contains('close-menu')) {hideNav();}
    else if (event.target.classList.contains('menu-link')) {hideNav();}
  });
  
};
export default mainNav;