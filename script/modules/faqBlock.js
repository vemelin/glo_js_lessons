// const faqBlock = () => {
//   let li = document.querySelectorAll('.accordion .title_block');
//   document.querySelector('.accordion ul').addEventListener(`click`, e => {
//     li.forEach(item => item == e.target ? item.classList.toggle('msg-active') : item.classList.remove('msg-active'));
//   });
// }; 
// export default faqBlock;
const styles = () => {
  const style = document.createElement('style');
  style.id = 'accordion-styles';
  style.type = 'text/css';
  style.textContent = `
    /* FAQ block - Accordion styles */
    .title_block::after{
      content: '+';
      float: right;
    }
    .title_block.msg-active::after{
      content: '–';
    }
    .msg{
      max-height: 0;
      transition: max-height 0.1s ease-in-out !important;
    }
    .msg-active{
      color: #fff !important; 
      background: linear-gradient(90deg, #f48922 0, #ffb015 100%) !important;
    }
  `;
  document.head.appendChild(style);
};
const accordion = () => {

  styles();

  const accordions = document.querySelectorAll('.accordion .title_block'),
    messages = document.querySelectorAll('.msg');

  // Remove ative element from current list
  accordions.forEach(item => item.classList.remove('msg-active'));

  accordions.forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();

      const nextElement = e.target.nextElementSibling;
      
      if(nextElement.style.maxHeight){
        nextElement.style.maxHeight = null;
        e.target.classList.remove('msg-active');
      }else{
        nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
        e.target.classList.add('msg-active');
      }

      messages.forEach(item => {
        if(item !== nextElement) {
          item.style.maxHeight = null;
        }
      });

      accordions.forEach(item => {
        if(item !== e.target) {
          item.classList.remove('msg-active');
        }
      });

    });

  });

};

export default accordion;