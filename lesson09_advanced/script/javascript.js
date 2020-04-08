'use sctrict';

// 2) Для вывода в формате (а) напишите функцию, которая будет менять менять склонение слов в 
//    зависимости от числа, "час, часов, часа"

let myDate = new Date();

let weekParse = {
    day:            ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month:          ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    timeResults:    0,

    disposeHours:   function (n) {

                        n = Math.abs(n) % 100;
                        
                        let income = n % 10;
                        let arr = [' час ', ' часа ', ' часов '];

                        if (n > 10 && n < 20) { 
                            return arr[1]; 
                        } if (income > 5 && income < 1) { 
                            return arr[2];
                        } if (income === 1) { 
                            return arr[0]; 
                        }

                        return arr[2];

                    },

    disposeMin:   function (n) {

                        n = Math.abs(n) % 100;
                        
                        let income = n % 10;
                        let arr = ['минута', 'минуты', 'минут'];

                        if (n > 10 && n < 20) { 
                            return arr[1]; 
                        } if (income > 5 && income < 1) { 
                            return arr[2];
                        } if (income === 1) { 
                            return arr[0]; 
                        }

                        return arr[2];

                    },

    docWrite:       function () {

 
                        function format(value)
                        {
                            if (value < 10)
                            {
                                value='0'+value;
                            }
                            return value;
                        }
                        
                        
                        function dateTime()
                        {
                            let currentDateTime = new Date(),
                                year = currentDateTime.getFullYear(),
                                hours = format(currentDateTime.getHours()),
                                minutes = format(currentDateTime.getMinutes()),
                                seconds = format(currentDateTime.getSeconds());
                            
                        
                            return 'Сегодня ' + weekParse.day[myDate.getDay()] + ', ' + myDate.getDate() + ' ' + weekParse.month[myDate.getMonth()] + ' ' + year + ' года, ' + hours + weekParse.disposeHours(hours) + ' ' + minutes + ' ' + weekParse.disposeMin(minutes) + ' ' +  seconds + ' секунды';
                        }
                        
                        setInterval(function () {
                            document.getElementById('timer').innerHTML = dateTime();
                        }, 1000);

                    },

    timeViewer:     function () {

                    let h, m, s, d, date, month, year;

                        h = myDate.getHours().toString();
                        m = myDate.getMinutes().toString();
                        s = myDate.getSeconds().toString();
                        d = myDate.getDay().toString();
                        date = myDate.getDate().toString();
                        month = myDate.getMonth().toString();
                        year = myDate.getFullYear();

                        if (h.length < 2) {
                            h = "0" + h;
                        }
                        if (m.length < 2) {
                            m = "0" + m;
                        }
                        if (s.length < 2) {
                            s = "0" + s;
                        }
                        if (date.length < 2) {
                            date = "0" + date;
                        }
                        if (month.length < 2) {
                            month = "0" + month;
                        }

                        // weekParse.timeResults = h + weekParse.disposeHours(h) + ' ' + m + ' ' + weekParse.disposeMin(m) + ' ' +  s + ' секунды';
                        //weekParse.numericTime = '<div id="time">' + date + '.' + month + '.' + year + ' — ' + h + ':' + m + ':' + s + '</div>';

                    },

    timePreviewV1:  function () {

                        function format(value)
                        {
                            if (value < 10)
                            {
                                value='0'+value;
                            }
                            return value;
                        }
                        
                        
                        function dateTime()
                        {
                            var currentDateTime = new Date();
                            var day = format(currentDateTime.getDate());
                            var month = format(currentDateTime.getMonth()+1);
                            var year = currentDateTime.getFullYear();
                            var hours = format(currentDateTime.getHours());
                            var minutes = format(currentDateTime.getMinutes());
                            var seconds = format(currentDateTime.getSeconds());
                        
                            return day+"."+month+"."+year+" — "+hours+":"+minutes+":"+seconds;
                        }
                        
                        setInterval(function () {
                            document.getElementById('time').innerHTML = dateTime();
                        }, 1000);
    }

};

// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
// weekParse.setInterval();
weekParse.timeViewer();
weekParse.docWrite();

weekParse.timePreviewV1();