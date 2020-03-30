/* let x, y;
x = 5;
y = 6;

// Regular conditions:
if (y > x) {
    console.log(true);
} else if (y < x) {
    console.log(false);
}

// Alternative — short conditions:
y < x ? console.log(true) : console.log(false);

// Switch condition example
let res = 5;
switch (res){
    case res: console.log(true); break;
    default: console.log(false);
}

//Method prompt & confirm
let person;
confirm ('Are you sure?') ? person = prompt('Hello, what is your name?') & alert('Hello ' + person) : alert('Person not sure');

if(confirm ('Are you sure?')){
    person = prompt('Hello, what is your name?');
    alert('Hello ' + person);
} else {
    alert('Person not sure');
}


// Work flow of Array + for statements
let arr = new Array(1, 2, 'Hello ', 'World', 111.01, 'Value', false, true);
for (let i = 0; i < arr.length; i++){
    arr[i] = i * 3;
    document.write(arr[i] + '<br/>');
}

let sum = 0;
for(i = 0; i < arr.length; i++) {
    sum += arr[i];
}
document.write('Summary equal = ' + (sum / arr.length)); */

let arr_1 = new Array();
let arr_2 = new Array();
let arr_3 = new Array();

/* for (let i = 0; i < 5; i++) document.write(arr_1[i] = i);
document.write('<br/>');

for (let i = 0; i < 10; i++) document.write(arr_2[i] = i);
document.write('<br/>');

for (let i = 0; i < 15; i++) document.write(arr_3[i] = i);
document.write('<br/>'); */

let arr = new Array(arr_1, arr_2, arr_3);

for(let i = 0; i < arr.length; i++){
    for (let a = 0; a < arr[i].length; a++){
        document.write(arr[i][a] + '');
    }
    document.write('<br/>');
}
