"use strict";
const API_KEY = 'trnsl.1.1.20200506T191845Z.dfa22dacec86436b.b9e2cf29a8c7259d38ee8b09640926328a1f6f62';
const dataInput = document.querySelector('#input'),
      dataOutput = document.querySelector('#output'),
      div = document.querySelectorAll('div');
      document.body.style.cssText = `font: normal 18px Roboto;`;

      div[0].style.cssText = `float: left; display: block; margin: 0 20px 0 0;`;
      dataInput.style.cssText = `height: 50px; width: 200px; font: normal 14px Roboto; margin-top: 5px;`;
      dataOutput.style.cssText = `height: 50px; width: 200px; font: normal 14px Roboto; margin-top: 5px;`;

const translate = () => {
  const text = dataInput.value;


  if (text.length > 0) {
    fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${API_KEY}&text=${dataInput.value}&hint=en,ru`,
      {
        method: "POST",
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Status network not 200");
        }
        return response.json();
      })
      .then(data => data.lang)
      .then(detectedLang => {
        const lang = detectedLang === "en" ? "en-ru" : "ru-en";
        fetch(
          `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${dataInput.value}&lang=${lang}`,
          {
            method: "POST",
            mode: "cors",
          }
        )
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("Status network not 200");
            }
            return response.json();
          })
          .then((data) => {
            output.value = data.text[0];
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }
};

dataInput.addEventListener('input', () => translate());