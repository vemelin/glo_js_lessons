const headerPhoneSwitcher = () => {
  const click = document.querySelector('.header-contacts__arrow'),
    expand = document.querySelector('.header-contacts__phone-number-accord');

  click.addEventListener('click', () => expand.classList.toggle('hidden-phone'));

};
export default headerPhoneSwitcher;