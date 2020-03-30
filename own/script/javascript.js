let x, y;
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

/* if(confirm ('Are you sure?')){
    person = prompt('Hello, what is your name?');
    alert('Hello ' + person);
} else {
    alert('Person not sure');
} */


// Work flow of Array + for statements
let arr = new Array(1, 2, 'Hello ', 'World', 111.01, 'Value', false, true);
for (let a = 0; a < arr.length; a++){
    document.write(arr[a] + '<br/>');
}
