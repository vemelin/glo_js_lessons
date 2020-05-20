const faqBlock = () => {
  let li = document.querySelectorAll('.accordion .title_block');
  document.querySelector('.accordion ul').addEventListener(`click`, e => {
    li.forEach(item => item == e.target ? item.classList.toggle('msg-active') : item.classList.remove('msg-active'));
  });
}; 
export default faqBlock;