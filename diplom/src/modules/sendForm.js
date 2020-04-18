const sendForm = () => {
    const forms = document.querySelectorAll('.form-ajax'),
    phoneInputs = document.querySelectorAll('.phone-user'),
    nameInputs = document.querySelectorAll('.user_name'),
    statusMessage = document.createElement('div'),
    errorMessage = 'Ошибка',
    loadMessage = 'Отправка...',
    successMessage = 'Отправлено!';

    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe;';
       

    phoneInputs.forEach((elem) => {
        elem.addEventListener('input', () => {

            let res = elem.value.match(/^\+?[0-9]*$/g);
            elem.value = '';
            if (res) {
                elem.value = res.join(',');
            }
        });
    });

    nameInputs.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-я;,!\s]/g, "");
        });
    });



    forms.forEach((item) => {
        item.addEventListener('submit', function (event) {
            event.preventDefault();
            this.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(this);
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });
          
            postData(body)
                .then((response) => {
                    statusMessage.textContent = successMessage;
                    if (response.status !== 200) {
                        throw new Error('status is not 200');
                    }

                    let inputs = document.querySelectorAll('input');
                    inputs.forEach((elem) => {
                        elem.value = '';
                    });
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                });
         
        });

    });


    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: JSON.stringify(body)
        
        });
       
    };



};

export default sendForm;

