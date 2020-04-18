const popUpDo = () => {

    const popUp = document.querySelector('.popup-call'),
        popUpBtn = document.querySelectorAll('.call-btn');



    const togglePopUp = () => {
        popUp.style.display = 'block';

        let count = 1;
        const appear = () => {
            count++;
            popUp.style.backgroundColor = `rgb(0,0,0,.${count})`;
            if (count > 7) {
                popUp.style.backgroundColor = `rgb(0,0,0,.8)`;
                clearInterval(stop);
            }
        };
        let stop = setInterval(appear, 42);

    };

    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popUp.style.display = 'none';
            }
        }
    });


    popUpBtn.forEach((elem) => {
        elem.addEventListener('click', togglePopUp)
    });

};

export default popUpDo;