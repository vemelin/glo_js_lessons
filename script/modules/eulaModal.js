const eulaModal = () => {

    const link = document.querySelectorAll('.link-privacy'),
          open = document.querySelector('.popup-privacy'),
          close = open.querySelector('.mobile-hide');
  
    link.forEach(element => {
      element.addEventListener(`click`, () => {
        open.style = "visibility: visible;"
        document.body.style.cssText = `overflow: hidden; height: 100%;`;
      });
    });
  
    open.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains('popup-privacy')) {
        open.style = "visibility: hidden;";
        document.body.style.cssText = `overflow: auto; height: auto;`;
      }
    });
  
    close.addEventListener(`click`, () => {
      open.style = "visibility: hidden;";
      document.body.style.cssText = `overflow: auto; height: auto;`;
    });

};
export default eulaModal;