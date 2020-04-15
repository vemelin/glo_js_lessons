'use strict';
const body = document.querySelector('body');

class MainProps {
	constructor(selector, height, width, bg, fontSize) {
		this.selector = selector;
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
	}
	renderElements() {
		let elems;
		if (this.selector[0] === '.') {
			elems = document.createElement('div');
			elems.classList.add('block');
		} else if (this.selector[0] === '#') {
			elems = document.createElement('p');
			elems.classList.add('nameById');
		}
		elems.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
  `;
		elems.textContent = 'Param-pam-pam';
		body.append(elems);
		console.log('Element ⥤', elems);
	}
}

const results1 = new MainProps('.id', 70, 70, 'red', 18);
results1.renderElements();

const results2 = new MainProps('#id', 50, 50, 'yellow', 20);
results2.renderElements();
