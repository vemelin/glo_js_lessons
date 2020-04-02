'use sctrict';

let argResults = function(data){
    
    if (!isNaN(data)){
        console.log('Вы получили число');
    }else if (typeof(data) === 'string' && data.length >= 30){
        data.trim();
        console.log(data.substring(0, 30) + '...');
    }else{
        console.log(data);
    }
};

// Push number
// argResults(2020);

// Push stroke with length > 30
argResults('Hey-yo vasko this is your awesome and finaly decisions by advanced lesson04');