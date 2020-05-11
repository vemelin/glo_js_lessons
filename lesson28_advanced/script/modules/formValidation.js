const formValidation = () => {
  // Calculator amount block
  const input = document.querySelectorAll('input[class*="calc-item calc"]');
  input.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/g, "");
    });
  });
};
export default formValidation;