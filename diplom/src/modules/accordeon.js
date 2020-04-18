const accordeon = () =>{

const accordBlock = document.getElementById('accordion-two'),
    textAccord = accordBlock.querySelectorAll('.panel-collapse'),
    headerAcoord = accordBlock.querySelectorAll('.panel');


accordBlock.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.panel');
 
    if (target) {
        headerAcoord.forEach((item, i) => {
            if (item === target) {
                 toggleAccord(i);
            }
        });
    }

})


const toggleAccord = (index) => {
    for (let i = 0; i < textAccord.length; i++) {
        if (index === i) {
             textAccord[i].style.display = "block";
        } else {
            textAccord[i].style.display = "none";
        }
    };
};

};

export default accordeon;


