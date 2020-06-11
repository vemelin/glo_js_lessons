const eulaModal = () => {

    const open = document.querySelectorAll('.link-privacy'),
          outOfModal = document.querySelector('.popup-privacy'),
          close = outOfModal.querySelector('.mobile-hide');
  
    open.forEach(element => {
      element.addEventListener(`click`, () => {
        outOfModal.style = "visibility: visible;"
        document.body.style.cssText = `overflow: hidden; height: 100%;`;
      });
    });
  
    outOfModal.addEventListener(`click`, e => {
      if (e.target.classList.contains('popup-privacy')) {
        outOfModal.style = "visibility: hidden;";
        document.body.removeAttribute('style'); //Reset styles
      }
    });
  
    close.addEventListener(`click`, () => {
      outOfModal.style = "visibility: hidden;";
      document.body.style.cssText = `overflow: auto; height: auto;`;
    });

};
export default eulaModal;