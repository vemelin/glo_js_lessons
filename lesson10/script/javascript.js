'use sctrict';

// Sort book list
const   sort = document.querySelectorAll('.books'),
        elems = document.querySelectorAll('.book');

        sort[0].prepend(elems[2]);
        sort[0].prepend(elems[5]);
        sort[0].prepend(elems[3]);
        sort[0].prepend(elems[4]);
        sort[0].prepend(elems[0]);
        sort[0].prepend(elems[1]);

// Change background image path
const   body = document.querySelector('body') 
        body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

// Change Header
const   changeHeader = document.querySelectorAll('a');
        changeHeader[2].textContent = 'Книга 3. this и Прототипы Объектов';

// Remove banner
const   bannerRemove = document.querySelectorAll('.adv');
        bannerRemove[0].remove();

// Sort elements inside 2nd bpok
const   sortSecondBook = document.querySelectorAll('ul');
        sortSecondBook[1].classList.add('sort1');
        sort1 = sortSecondBook[1].children;

        sortSecondBook[1].append(sort1[0]);
        sortSecondBook[1].append(sort1[0]);
        sortSecondBook[1].append(sort1[1]);
        sortSecondBook[1].append(sort1[3]);
        sortSecondBook[1].append(sort1[3]);
        sortSecondBook[1].append(sort1[4]);
        sortSecondBook[1].append(sort1[0]);
        sortSecondBook[1].append(sort1[3]);
        sortSecondBook[1].append(sort1[2]);
        sortSecondBook[1].append(sort1[0]);
        sortSecondBook[1].append(sort1[0]);

// Sort elements inside 5th book
const   sortFifthBook = document.querySelectorAll('ul');
        sortFifthBook[4].classList.add('sort2');
        sort2 = sortFifthBook[4].children;

        sortFifthBook[4].append(sort2[0]);
        sortFifthBook[4].append(sort2[0]);
        sortFifthBook[4].append(sort2[7]);
        sortFifthBook[4].append(sort2[1]);
        sortFifthBook[4].append(sort2[1]);
        sortFifthBook[4].append(sort2[1]);
        sortFifthBook[4].append(sort2[3]);
        sortFifthBook[4].append(sort2[3]);
        sortFifthBook[4].append(sort2[0]);
        sortFifthBook[4].append(sort2[0]);
        sortFifthBook[4].append(sort2[0]);

        console.log(sortFifthBook);

// Add new list item
const   addElement = document.querySelectorAll('ul'),
        newListItem = document.createElement('li');

        addElement[2].append(newListItem ); 
        newListItem .textContent = 'Глава 8: За пределами ES6';