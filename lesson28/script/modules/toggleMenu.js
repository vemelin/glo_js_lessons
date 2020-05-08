// Main navigation
const menu = document.querySelector("menu");
const togglleMenu = () => {
  document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.closest(".menu")) {
      menu.classList.add("active-menu");
    } else if (
      target &&
      (target.tagName === "A" || !target.classList.contains("active-menu"))
    ) {
      menu.classList.remove("active-menu");
    }
  });
};
export default togglleMenu;