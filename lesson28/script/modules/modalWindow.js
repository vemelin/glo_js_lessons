const modalToggle = () => {
  const modalCloseButton = document.querySelector(".popup-close"),
    modalCTA = document.querySelectorAll(".popup-btn"),
    modal = document.querySelector(".popup");

  modalCTA.forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", (event) => {
    let target = event.target;

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
  modalCTA.forEach((output) => output.addEventListener("click", modalSlowMo));
  modalCloseButton.addEventListener("click", () => {
    modal.style.cssText = `display: none;`;
    document.body.style.cssText = `overflow: scroll;`;
  });
};
export default modalToggle;