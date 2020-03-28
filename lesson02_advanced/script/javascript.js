let num = 266219;

num = String(num);

let results = 1;

for(let i = 0; i < num.length; i++){
    results *= num[i];
}

let res = results ** 3;
console.log(res);

let message = String(res);
alert(message[0]);
alert(message[1]);