const thankYouModal = () => {
    const modal = document.querySelector('.popup-thank');
  
    modal.style.cssText = 'visibility: visible;';
  
    modal.addEventListener(`click`, e => {
      if(e.target.classList.contains('close-thank')){
        modal.style.cssText = 'visibility: hidden;';
      }else if (e.target.classList.contains('popup-thank')){
        modal.style.cssText = 'visibility: hidden;';
      }
    });
}; 
export default thankYouModal;