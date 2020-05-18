const regExpPhoneMask = () => {
  const input = document.querySelectorAll('input[name="phone"]');

  input.forEach(element => {
    element.setAttribute('placeholder', '+7 (___) ___-__-__');
    element.addEventListener('input', (evt) => {

      const keyCode = evt.keyCode;
      const template = '+7 (___) ___-__-__';
      const def = template.replace(/\D/g, "");
      const val = element.value.replace(/\D/g, "");
      let i = 0;
      let newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));

      i = newValue.indexOf("_");
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, element.value.length).replace(/_+/g, a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(element.value) || element.value.length < 5 || keyCode > 47 && keyCode < 58) {
        element.value = newValue;
      }
      if (event.type === "blur" && element.value.length < 5) {
        element.value = "";
      }

    });
  });


};

export default regExpPhoneMask;