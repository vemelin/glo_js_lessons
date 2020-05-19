const repairModal = () => {
  const cta = document.querySelectorAll('.link-list'),
        modal = document.querySelector(`.popup-repair-types`),
        close = modal.querySelectorAll(`.close`),
        hidden = () => {
          modal.style.cssText = "visibility: hidden;";
          document.body.style.cssText = `overflow: auto; height: auto;`;
        },
        visible = () => {
          // document.querySelector('.popup-menu').style.cssText = 'transform: translateX(645px);';
          document.body.style.cssText = `overflow: hidden; height: 100%;`;
          modal.style.cssText = "visibility: visible;";
        };

  cta.forEach(element => {
    if (!element.matches('a')) { element.addEventListener(`click`, () => visible()) }
  });

  modal.addEventListener(`click`, event => {
    if (event.target.classList.contains('popup-repair-types')) { hidden(); }
  });

  close.forEach(element => element.addEventListener(`click`, () => hidden() ));

}; 
export default repairModal;