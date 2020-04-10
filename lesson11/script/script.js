'use sctrict';

let obj = {
        x: 10,
        y: 15,
        test: newTest,
};

function newTest() {
        console.log('this: ', this);
};

obj.test();