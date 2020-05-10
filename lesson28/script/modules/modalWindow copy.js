const modalToggle = () => {
  const close = document.querySelector(".popup-close"),
    open = document.querySelectorAll(".popup-btn"),
    modal = document.querySelector(".popup"),
    style = document.createElement('style'),
    modalWindow = document.querySelector('.popup-content');

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
          top: 5%;
          transform: rotateX(15deg);
        }
        to {
          opacity: 1; 
          top: 20%;
          transform: rotateX(0deg);
          }
      }
    `));
    document.head.append(style);
    style.type = 'text/css';
    

    
  // modal.addEventListener("click", (event) => {
  //   let target = event.target;
    
  //   // Close modal when click out of modal window
  //   open.forEach((element) => element.style.display = "block");

  //   if (target.classList.contains("popup-close")) {
  //     modal.style.display = "none";
  //   } else {
  //     target = target.closest(".popup-content");
  //     if (!target) {
  //       modal.style.display = "none";
  //       document.body.style.cssText = `overflow: scroll;`;
  //     }
  //   }
  // });

  // // Slow motion
  // const modalSlowMo = () => {
  //   modal.style.cssText = `display: block; opacity: 0;`;
  //   let count = 0;
  //   const appear = () => {
  //     count++;
  //     modal.style.opacity = `.${count}`;

  //     if (count > 8) {
  //       modal.style.opacity = "1";
  //       clearInterval(stop);
  //       document.body.style.cssText = `overflow: hidden;`;
  //     }
  //   };
  //   const stop = setInterval(appear, 35);
  // };
  // // modalCTA.forEach((output) => output.addEventListener("click", modalSlowMo));
  // // function reportWindowSize() {
  // //   let width = window.innerWidth;
  // //   return width;
  // // }
  // // window.addEventListener('resize', reportWindowSize);

  // // let width = window.innerWidth;

  let width = window.innerWidth;

  window.addEventListener('resize', () => {  
    width = window.innerWidth;
  });

  open.forEach(output => {

    output.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.cssText = `overflow: hidden;`;
    });


    // output.addEventListener("click", modalSlowMo)
    
    // let animation;

    // if (width > 768) {
    //   console.log(width);
    //   output.addEventListener("click", modalSlowMo)
    //   // animation = requestAnimationFrame(modalSlowMo);
    //   return;
    // }
    // else if (width < 768){
    //   console.log(width);
    //   cancelAnimationFrame(animation);
    //   // output.addEventListener('click', () => modal.style.display = 'block');
    //   }

  });
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  })
  window.addEventListener('click', (event) => {
    if(event.target == modal) {      
      modal.style.display = 'none';
      document.body.style.cssText = `overflow: auto;`;
    }
  })
  // modalCTA.forEach(output => {
  //   output.addEventListener('click', (event) => {
  //     let target = event.target;

  //     if (width > 768) {         
  //       target.requestAnimationFrame(modalSlowMo);
  //       // target.addEventListener("click", modalSlowMo)
  //     }
  //     else if (width < 768){
  //       console.log(modalSlowMo);
  //       console.log(width);        
        
  //       cancelAnimationFrame(modalSlowMo)
  //       target.addEventListener('click', () => modal.style.display = 'block');
  //     }
      
  //     // if(width > 768) {
  //     //   console.log(width + ' > 768');
  //     // } else if(width < 768) {
  //     //   console.log(width + ' < 768');
  //     // }
      
  //     // (pageWidth > 768) ? target.addEventListener("click", modalSlowMo) :
  //     // target.addEventListener('click', () => modal.style.display = 'block');
  //   });
  // });

  // modalCTA.forEach(element => {
  //   if (width > 768) {element.addEventListener("click", modalSlowMo)};
  //   if(width < 768) {
  //     console.log(width + ' > 768');
  //     element.addEventListener ('click', () => {
  //       modal.style.cssText = `display: block; opacity: 1;`;
  //     });
  //   } else if (width > 768) {
  //     element.addEventListener("click", modalSlowMo);
  //     modal.style.cssText = `display: block; opacity: 0;`;
  //     console.log(width + ' < 768');
  //   }
  // });

  // if(width > 768) {
  //   moveModal = requestAnimationFrame(modalSlowMo);
  //   console.log(width + ' > 768');
  // } else if(width < 768) {
  //   cancelAnimationFrame(moveModal);
  //   console.log(width + ' < 768');
  // }
  
  // modalCTA.forEach(output => {
  //   (pageWidth > 768) ? output.addEventListener("click", modalSlowMo) :
  //   output.addEventListener('click', () => modal.style.display = 'block');
  // });

  // close.addEventListener("click", () => {    
  //   modal.style.cssText = `display: none;`;
  //   document.body.style.cssText = `overflow: scroll;`;
  // });
};
export default modalToggle;