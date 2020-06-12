const styles = () => {
  const style = document.createElement('style');
  style.id = 'main-navigation-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Main navigation */
    .selected {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    .popup-dialog-menu{
      background-color: #ffffff;
      opacity: 0.6;
    }
  `;
  document.head.appendChild(style);
};

const mainNav = () => {

  styles();

  const open = document.querySelectorAll('.menu'),
    modal = document.querySelector('.popup-dialog-menu'),
    wrapper = document.querySelector('.popup-menu');

  open[1].style.cssText = `display: block;`;
  open.forEach(element => element.addEventListener('click', () => modal.classList.toggle('selected')));
  // open.addEventListener('click', () => modal.classList.toggle('selected'));

  document.body.addEventListener('click', e => {
    console.log(e.target);
    
    if (e.target.classList.contains('close-menu')) {
      modal.classList.toggle('selected');
    // } else if (e.target.closest('.popup-dialog-menu')) {
    } 
    // if (e.target.closest('.popup-dialog-menu')) {
    //   modal.classList.toggle('selected');
    // }
  });

};

export default mainNav;

// const mainNav = () => {
//   const menuBtn = document.querySelector('.menu .menu__icon');

//   const popupMenu = document.querySelector('.popup-menu');
//   let popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
//   const closeMenuBtn = popupMenu.querySelector('.close-menu');

//   if (windowWidth < 576) {
//     popupDialogMenu.style.cssText = 'transform: translateY(-1500px);';    
//   } else {
//     popupDialogMenu.style.cssText = 'transform: translateX(645px);';
//   }


//   menuBtn.addEventListener('click', () => {
//     popupDialogMenu.style.cssText = 'transform: translateY(0);';
//   });

//   closeMenuBtn.addEventListener('click', () => {
//     if (windowWidth < 576) {
//       popupDialogMenu.style.cssText = 'transform: translateY(-1500px);';
//     } else {
//       popupDialogMenu.style.cssText = 'transform: translateX(645px);';
//     }
    
//   });
// };

// export default mainNav;


    
// .visible {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex; }
//   .visible-content {
//     display: block; }
//     @media (max-width: 1024px) and (min-width: 576px) {
//       .visible-content {
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         -ms-flex-pack: distribute;
//         justify-content: space-around; } }
//     .visible-content-block {
//       display: block; }