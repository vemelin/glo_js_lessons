'use sctrict';

let myDate = new Date();

let weekParse = {

    day:            ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month:          ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    minutes:        [' минута ', ' минуты ', ' минут '],
    hours:          [' час ', ' часа ', ' часов '],
    seconds:        [' секунда ', ' секунды ', ' секунд '],
    timeResults:    0,

    disposeHours: function (checkData, arrIn) {
                    
            if (checkData === 1 || checkData === 21) {
                return arrIn[0];                    
            } else if (checkData > 1 && checkData< 5 || checkData > 21 && checkData <= 24) {                    
                return  arrIn[1];                    
            } else if (checkData > 4 && checkData < 21) {                    
                return arrIn[2];                    
            } else if (checkData >= 0) {                    
                return arrIn[2];                    
            }
        },

    disposeMS: function (v, arrIn) {

        if (v === 1 || v === 21 || v === 31 || v === 41 || v === 51) {
            return arrIn[0];
        } else if (v > 1 && v < 5 || v > 21 && v <= 24 || v > 31 && v <= 34 || v > 41 && v <= 44 || v > 51 && v <= 54) {
            return arrIn[1];
        } else if (v >= 5 && v < 21 || v >= 25 && v < 31 || v >= 35 && v < 41 || v >= 45 && v < 51 || v >= 55) {
            return arrIn[2];
        } else if (v >= 0) {
            return arrIn[2];
        }
    },

    docWrite:  function () {

        function format(value) {
            if (value < 10) {
                value='0' + value;
            } return value;
        }
                                   
        function dateTime() {
            let currentDateTime = new Date(),
                year = currentDateTime.getFullYear(),
                hours = format(currentDateTime.getHours()),
                minutes = format(currentDateTime.getMinutes()),
                seconds = format(currentDateTime.getSeconds());
                
                return 'Сегодня ' + weekParse.day[myDate.getDay()] + ', ' + myDate.getDate() + ' ' + weekParse.month[myDate.getMonth()] + ' ' + year + ' года, ' + hours + weekParse.disposeHours(hours, weekParse.hours) + ' ' + minutes + ' ' + weekParse.disposeMS(minutes, weekParse.minutes) + ' ' +  seconds + weekParse.disposeMS(seconds, weekParse.seconds);

        }
                        
        setInterval(function () { document.querySelector('.firstTimer').innerHTML = dateTime(); }, 1000);
    },

    timeViewer:     function () {

        let h = myDate.getHours().toString(),
            m = myDate.getMinutes().toString(),
            s = myDate.getSeconds().toString(),
            d = myDate.getDay().toString(),
            date = myDate.getDate().toString(),
            month = myDate.getMonth().toString(),
            year = myDate.getFullYear();

        if (h.length < 2) { h = "0" + h; }
        if (m.length < 2) { m = "0" + m; }
        if (s.length < 2) { s = "0" + s; }
        if (date.length < 2) { date = "0" + date; }
        if (month.length < 2) { month = "0" + month; }
    },

    timePreviewV1:  function () {

        function format(value) {
            if (value < 10) {
                value='0'+value;
            } return value;
        }
                        
        function dateTime () {
            let currentDateTime = new Date(),
                day = format(currentDateTime.getDate()),
                month = format(currentDateTime.getMonth()+1),
                year = currentDateTime.getFullYear(),
                hours = format(currentDateTime.getHours()),
                minutes = format(currentDateTime.getMinutes()),
                seconds = format(currentDateTime.getSeconds());
        
                return day+"."+month+"."+year+" — "+hours+":"+minutes+":"+seconds;
        }
        
        setInterval(function (){document.querySelector('.secondTimer').innerHTML = dateTime();}, 1000);
    }

};

weekParse.timeViewer();
weekParse.docWrite();
weekParse.timePreviewV1();