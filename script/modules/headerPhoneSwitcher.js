const styles = () => {
  const style = document.createElement('style');
  style.id = 'header-phone-switcher-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Header phone toggle switcher */
    .hidden-phone {top: 25px;}
    .hidden-phone a {opacity: 1;}
  `;
  document.head.appendChild(style);
};

const headerPhoneSwitcher = () => {
  styles();
  const click = document.querySelector('.header-contacts__arrow'),
    expand = document.querySelector('.header-contacts__phone-number-accord');

  click.addEventListener('click', () => expand.classList.toggle('hidden-phone'));

};
export default headerPhoneSwitcher;