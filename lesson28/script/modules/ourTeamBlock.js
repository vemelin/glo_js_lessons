const ourTeamPic = () => {
  const getTeamImage = document.querySelectorAll(".command__photo");
  let src;
  getTeamImage.forEach(image => {
    image.addEventListener("mouseenter", (event) => {
      src = event.target.getAttribute("src");
      event.target.src = event.target.dataset.img;
    });
    image.addEventListener("mouseleave", event => event.target.src = src);
  });
};
export default ourTeamPic;