const faqBlock = () => {
  document.querySelector('#faq').addEventListener(`click`, event => {
    let target = event.target;
    if(target.classList.contains('msg-active')){
      target.classList.remove('msg-active');
    } else if(target.classList.contains('title_block')) {
      target.classList.add('msg-active');
    }
  });
}; 
export default faqBlock;