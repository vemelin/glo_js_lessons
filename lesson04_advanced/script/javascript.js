'use sctrict';

let argResults = function(data){
    
    if (!isNaN(data)){
        console.log('Вы получили число');
    }else if (typeof(data) === 'string' && data.length < 30){
        console.log(data.trim());
    }else if (data.length >= 30){
        console.log(data.substr(0, 30) + '...');
    }
};

// Push number
// argResults(2020);

// Push stroke with length < 30
// argResults('Hey-yo vasko asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf');

// Push stroke with length > 30
argResults('Hey-yo vasko this is your awesome and finaly decisions by advanced lesson04');