'use sctrict';

//// First part of lesson 14

'use strict';

// New object of dom with new properties
function domElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

//Methods to create div and 
domElement.prototype.addNewElements = function () {

  let inputText = prompt('Пожалуйста, введите . или #');
  // Create styles height, width, bg, font-size

  if(inputText === '.'){

    let div = document.createElement('div');
    div.style.cssText = 'height: 100px; width: 100px; background: green; font-size: 25px; color: #fff; padding: 20px;';
    div.textContent = `We are trying to catch point '.'`;
    document.body.appendChild(div);
    console.log(div);

  } else if(inputText === '#') {

    let p = document.createElement('p');
    p.style.cssText = 'height: 100px; width: 100px; background: yellow; font-size: 25px; color: #000; padding: 10px;';
    p.textContent = `Here you are '#'`;
    document.body.appendChild(p);
    console.log(p);

  } else if (inputText === null || inputText === '') {
    document.write("<h1>Sorry we didn't find any styles for you</h1>");
  }

};

//Link to new Object
let linkToObject = new domElement('new_object', '70px', '70px', '#030303', '35px');
linkToObject.addNewElements();
console.log(linkToObject)