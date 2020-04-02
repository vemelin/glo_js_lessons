'use sctrict';

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

let n = 30, a, b;

for (a = 2; a < n; a++){
    
    for (b = 2; b < a; b++){
    
        if (a % b == 0) continue;

    }

    console.log('Делители этого числа: ' + a + ' и ' + b);

}


// let n = 30, i, j;

// for (i = 2; i <= n; i++) { // Для всех i...

//   for (j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue; // не подходит, берём следующее
//     console.log('Делители этого числа: ' + j)
//   }
//   console.log('Делители этого числа: ' + i)
// }