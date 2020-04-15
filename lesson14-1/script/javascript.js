'use strict';
const body = document.querySelector('body');

function MainProps(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
}

MainProps.prototype.renderElements = function() {
	let elems;
	if (this.selector[0] === '.') {
		elems = document.createElement('div');
		elems.classList.add('block');
	} else if (this.selector[0] === '#') {
		elems = document.createElement('p');
		elems.classList.add('nameById');
	}
	elems.style.cssText = `
    height: ${this.height} px;
    width: ${this.width} px;
    background: ${this.bg};
    font-size: ${this.fontSize} px;
  `;
	elems.textContent = 'Param-pam-pam';
	body.append(elems);
	console.log('Element: ', elems);
};

//Link to new Object
// const linkToObject = new domElement.mainProps('new_object', 70, 70, '#030303', 35);
const results1 = new MainProps('.id', 70, 70, 'red', 35);
results1.renderElements();

const results2 = new MainProps('#id', 50, 50, 'yellow', 10);
results2.renderElements();
