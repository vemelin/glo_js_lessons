const modalToggle = () => {
  const modalCloseButton = document.querySelector(".popup-close"),
    modalCTA = document.querySelectorAll(".popup-btn"),
    modal = document.querySelector(".popup"),
    pageWidth = document.documentElement.clientWidth;
    
  modal.addEventListener("click", (event) => {
    let target = event.target;
    
    // Close modal when click out of modal window
    modalCTA.forEach((element) => element.style.display = "block");

    if (target.classList.contains("popup-close")) {
      modal.style.display = "none";
    } else {
      target = target.closest(".popup-content");
      if (!target) {
        modal.style.display = "none";
        document.body.style.cssText = `overflow: scroll;`;
      }
    }
  });

  // Slow motion
  const modalSlowMo = () => {
    modal.style.cssText = `display: block; opacity: 0;`;
    let count = 0;
    const appear = () => {
      count++;
      modal.style.opacity = `.${count}`;

      if (count > 8) {
        modal.style.opacity = "1";
        clearInterval(stop);
        document.body.style.cssText = `overflow: hidden;`;
      }
    };
    const stop = setInterval(appear, 35);
  };
  // modalCTA.forEach((output) => output.addEventListener("click", modalSlowMo));
  // function reportWindowSize() {
  //   let width = window.innerWidth;
  //   return width;
  // }
  // window.addEventListener('resize', reportWindowSize);

  // let width = window.innerWidth;

  let width = window.innerWidth;

  window.addEventListener('resize', () => {  
    width = window.innerWidth;
    modalCTA.forEach(output => {
  
        if (width > 768) {
          console.log(width);
          output.addEventListener("click", modalSlowMo)
        }
        else if (width < 768){
          console.log(width);          
          // cancelAnimationFrame(modalSlowMo)
          output.addEventListener('click', () => modal.style.display = 'block');
        }

    });
  });

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
  
  modalCTA.forEach(output => {
    (pageWidth > 768) ? output.addEventListener("click", modalSlowMo) :
    output.addEventListener('click', () => modal.style.display = 'block');
  });

  modalCloseButton.addEventListener("click", () => {    
    modal.style.cssText = `display: none;`;
    document.body.style.cssText = `overflow: scroll;`;
  });
};
export default modalToggle;