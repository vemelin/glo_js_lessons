// let width = window.innerWidth;

// const mainNav = (width) => {

//   const cta = document.querySelector('.menu'),
//         modal = document.querySelector('.popup-dialog-menu'),
//         hideNav = () => modal.style.cssText = 'transform: translateX(645px);'

//   cta.addEventListener('click', () => modal.style.cssText = 'transform: translateY(0);');

//   modal.addEventListener('click', event => {
//     if (event.target.classList.contains('close-menu')) {hideNav();}
//     else if (event.target.classList.contains('menu-link')) {hideNav();}
//   });
  
// };

const mainNav = () => {

  let width = window.innerWidth;
  
  const cta = document.querySelector('.menu'),
        modal = document.querySelector('.popup-dialog-menu'),
        hideNav = () => modal.style.cssText = 'transform: translateX(645px);'

  if (width < 576) {
    modal.style.cssText = 'transform: translateY(-1500px);';    
  } else {
    modal.style.cssText = 'transform: translateX(645px);';
  }

  cta.addEventListener('click', () => modal.style.cssText = 'transform: translateY(0);');

  modal.addEventListener('click', event => {
    if (event.target.classList.contains('close-menu')) {hideNav();}
    else if (event.target.classList.contains('menu-link')) {hideNav();}
  });
  
};

export default mainNav;