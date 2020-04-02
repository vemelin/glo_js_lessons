'use sctrict';

// 1 task 
let arr = [
    '65465456',
    '268984',
    '50234098',
    '098120938',
    '1230921',
    '5551220',
    '48961220',
];

for (let i = 0; i < arr.length; i++){
    
    let compare = arr[i];
    compare = compare.slice(0,1);

    if(compare == 2 || compare == 4){
        console.log(arr[i]);
    }
}


// 2 task solution
let n = 100;

start:
for (let a = 2; a < n; a++){
    
    for (let b = 2; b < a; b++){    

        if (a % b == 0) continue start;

    }

    console.log('Делители этого числа: ' + a);

}