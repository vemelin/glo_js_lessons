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
	moveBeArrowKeys(move)  {
		const div = document.querySelector('.block');
		let left = parseInt(div.style.left);
		let top = parseInt(div.style.top);
		if (!isNaN(div.style.left)) {
			div.textContent = 'GO';
			left = 0;
		}
		if (!isNaN(div.style.top)) {
			top = 0;
		}
		if (move.keyCode === 37) {
			left += -10;
			div.style.left = left + 'px';
			div.textContent = '⥢';
		} else if (move.keyCode === 38) {
			top += -10;
			div.style.top = top + 'px';
			div.textContent = '⥣';
		} else if (move.keyCode === 39) {
			left += +10;
			div.style.left = left + 'px';
			div.textContent = '⥤';
		} else if (move.keyCode === 40) {
			top += 10;
			div.style.top = top + 'px';
			div.textContent = '⥥';
		}
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
      text-align: center;
      padding: 25px 10px 0 10px; 
      position: absolute;
      border-radius: 5px;
      color: white;
    `;
		elems.textContent = 'GO';
		body.append(elems);
		document.addEventListener('keydown', this.moveBeArrowKeys);
		console.log('Element ⥤', elems);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const moveObjec = new MainProps('.id', 50, 70, 'black', 18);
	moveObjec.renderElements();
});


  