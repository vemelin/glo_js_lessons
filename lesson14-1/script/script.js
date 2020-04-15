class DomElement {
  element

  constructor(nameClass, height, width, bg, fontSize) {

      if (nameClass[0] === '.') {
          let cla = nameClass.slice(1);
          this.element = document.createElement('div'); //document.createElement('li');
          this.element.style.cssText = `
          height:${height}px;
          width:${width}px;
          background:${bg};
          font-size:${fontSize}px;
      `;
        console.log(this.element);

  //console.log('this.element: ', this.element);

      } else if (nameClass[0] === '#') {
          let atr = nameClass.slice(1);
          this.element = document.createElement('p'); //newElement.setAttribute('id','idName')
          this.element.style.cssText = `
            height:${height}px;
            width:${width}px;
            background:${bg};
            font-size:${fontSize}px;
        `;
          console.log(this.element);
      }
  }
}

const results1 = new DomElement('.id', 70, 70, 'red', 18);
const results2 = new DomElement('#id', 50, 50, 'yellow', 20);

