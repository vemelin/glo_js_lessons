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
    if (e.target.classList.contains('close-menu')) {
      modal.classList.toggle('selected');
    } 
    if (e.target.classList.contains('menu-link')) {
      modal.classList.toggle('selected');
    }
  });

};

export default mainNav;