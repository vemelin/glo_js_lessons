const modalToggle = () => {
  const close = document.querySelector(".popup-close"),
    open = document.querySelectorAll(".popup-btn"),
    modal = document.querySelector(".popup"),
    style = document.createElement('style');

  // Custom css
  style.append(document.createTextNode(`
    .popup{perspective: 500px;}
    .popup-content{
      transform: rotateX(0deg);
      animation-name: popup-content;
      animation-duration:.8s;
    }
    @keyframes popup-content{
      from {
        opacity: 0; 
        top: 0;
        padding: 2rem 6rem;
        transform: rotateX(15deg);
      }
      to {
        opacity: 1; 
        top: 10%;
        lef: 38%;
        margin: 0;
        padding: 2rem 6rem;
        transform: rotateX(0deg);
        }
    }

    @media (max-width:767px) {
      @keyframes popup-content{
        to {lef: 30%;}
      }
    }

    @media (max-width:690px) {
      @keyframes popup-content{
        to {lef: 25%;}
      }
    }
    @media (max-width:500px) {
      @keyframes popup-content{
        to {lef: 18%;}
      }
    }
    @media (max-width:448px) {
      @keyframes popup-content{
        to {lef: 15%;}
      }
    }
  `));

  document.head.append(style);
  style.type = 'text/css';  

  let width = window.innerWidth;

  window.addEventListener('resize', () => {  
    width = window.innerWidth;
  });

  open.forEach(output => {
    output.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.cssText = `overflow: hidden;`;
    });
  });

  window.addEventListener('click', (event) => {
    if(event.target == close) {      
      modal.style.display = 'none';
      document.body.style.cssText = `overflow: auto;`;
    }
    if(event.target == modal) {      
      modal.style.display = 'none';
      document.body.style.cssText = `overflow: auto;`;
    }
  })
};
export default modalToggle;