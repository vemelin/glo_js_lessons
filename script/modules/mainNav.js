const mainNav = () => {
  let width = window.innerWidth;
  const cta = document.querySelector('.menu'),
        modal = document.querySelector('.popup-dialog-menu'),
        adoptive = () => width < 576 ? modal.style.cssText = 'transform: translateY(-1500px);' : modal.style.cssText = 'transform: translateX(645px);';
  
  adoptive();
  
  cta.addEventListener('click', () => modal.style.cssText = 'transform: translateY(0);');
  
  modal.addEventListener('click', e => {
    if(e.target.classList.contains('close-menu')) {adoptive()}
    else if(e.target.classList.contains('menu-link')){adoptive()}
  });
  
};

export default mainNav;