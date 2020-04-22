'use strict';
document.querySelector('title').textContent = '18 урок';
const mainBlock = document.querySelector('.center-block');
mainBlock.style.cssText = `
  margin: 0 auto;
  display:block;
  width: 500px;
  height: 300px;
  position: relative;
  top: 40px;
  background-color:pink;
  font-size:55px;
  border:2px dashed green;
  color:white;
  overflow-x: hidden; 
  overflow-x: auto;
  /* box-sizing: border-box */`;
  
  const block = [];
  const p = document.createElement('p').textContent = 'generatedText, generatedText, generatedText, generatedText';
  block.push(p);
  mainBlock.textContent = `${[...block, ...block, ...block, ...block, ...block, ...block, ...block]}`;
  

  const addButton = document.querySelector('.test').style.cssText = `
    margin: 0 auto;
    display:block;
    position: relative;
    top: 20px;
  `;  


const height = mainBlock.scrollHeight;
console.log('height:' + height);
const width = mainBlock.scrollWidth;
console.log('width:' + width);

console.dir(mainBlock);

document.querySelector('.test').addEventListener('click', () => {
  // mainBlock.style.height = `${mainBlock.scrollHeight}px`;
  // mainBlock.style.width = `${mainBlock.scrollWidth}px`;
  // mainBlock.scrollBy(0, 10);
  // mainBlock.scrollTo(0, 10);//По горизонтали один раз
  // mainBlock.scrollTop += 10;
  const data = mainBlock.getBoundingClientRect();
  console.log(data.left);
  console.log(data.x);
  console.log(data.bottom);
  
  
})