
//===== Variables Types ==================
const str = 'Hello World'.toUpperCase();
console.log(str); /* OR */ console.log('Example'.toUpperCase());
console.log(str.toLowerCase());

//======== +++ Number Math pow alterative function ===========
console.log(Math.pow(5, 3)); console.log(5**3);

//==== How to work with string ============
console.log('test example'.charAt(0)); //Select letter by index
console.log('test example'.charAt(5)); //Thi is old style

const str = 'vasya';
console.log(str[0]); //New style
console.log(str[0].toUpperCase()); //Select first letter $ increase first letter

const str = 'Hello Wrold';
console.log(str.substring(6));

const str = 'Hello World This is Vasiliy me please welcome!';
console.log(str.substring(12, 27));
console.log(str.slice(-8));
console.log(str.substr(12, 15));

const str = 'Hello World';
console.log(str.indexOf('W'));

const str = 'Hello World';
console.log(str.replace('World', 'Vasiliy'));

const str1 = 'Hello, World, this, is, me, welcome'.split(', ');
const str2 = 'apple, kiwi, orange'.split(', ');
const str3 = [...str1, ...str2];