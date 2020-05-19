const advicesBlock = () => {
  const cta = document.querySelectorAll('.button_wide'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.close-consultation'),
        hidden = () => {
          modal.style.cssText = "visibility: hidden;";
          document.body.style.cssText = `overflow: auto; height: auto;`;
        },
        visible = () => {
          document.body.style.cssText = `overflow: hidden; height: 100%;`;
          modal.style.cssText = "visibility: visible;";
        };

  cta.forEach(element => element.addEventListener(`click`, () => visible() ));
  close.addEventListener(`click`, () => hidden());
  modal.addEventListener(`click`, event => { if (event.target.classList.contains('popup-consultation')) { hidden(); } });


};
export default advicesBlock;