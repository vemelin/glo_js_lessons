const modalToggle = () => {
  const close = document.querySelector(".popup-close"),
    open = document.querySelectorAll(".popup-btn"),
    modal = document.querySelector(".popup"),
    modalWindow = document.querySelector(".popup-content");

  let count = -200;
  const animate = () => {
    if (document.documentElement.clientWidth < 768) {
      modalWindow.style.transform = `translate(-57px, 0)`;
      return;
    }
    let requestId = requestAnimationFrame(animate);
    count += 5;
    modalWindow.style.transform = `translate(-57px, ${count}%)`;
    if (count >= 0) {
      cancelAnimationFrame(requestId);
    }
  };

  open.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      animate();
    });
  });

  modal.addEventListener("click", (event) => {
    let target = event.target;
    count = -200;
    if (target == close) {
      modal.style.display = "none";
      document.body.style.cssText = `overflow: auto;`;
    }
    if (target == modal) {
      target.style.display = "none";
      document.body.style.cssText = `overflow: auto;`;
    }
  });
};
export default modalToggle;