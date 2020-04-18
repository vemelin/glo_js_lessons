'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill'

import elementClosest from 'element-closest';
elementClosest(window);

/*импорт*/
import popUpDo from './modules/popUpDo';
import calc from "./modules/calculator";
import accordeon from "./modules/accordeon";
import sendForm from "./modules/sendForm";




/*вызов*/
popUpDo();
calc();
accordeon();
sendForm();

