const calc = () =>{

const calcBlock = document.getElementById('accordion'),
    calcItem = calcBlock.querySelectorAll('.panel'),
    calcHeaading = calcBlock.querySelectorAll('.panel-heading'),
    calcItemCont = calcBlock.querySelectorAll('.panel-collapse'),    
    calcBtn = calcBlock.querySelectorAll('.construct-btn'),
    calcTypeBlock = document.getElementById('collapseOne'),
    calckCheck = calcTypeBlock.querySelector('.onoffswitch-inner'),
    calcBottom = document.querySelector('.onoffswitchBottom'),
    calcBottomCheck = calcBottom.querySelector('.onoffswitch-inner'),
    result = {
        type: "one",
        diameter: 1.4,
        quantity: 1,
        bottom: true,
        distance: 0,
        totalValue: 0,
        nameClient: "client",
        telNumb:0
    },
    calcBottomBloc = document.getElementById('collapseThree'),
    calcDistanceBloc = document.getElementById('collapseFour'),
    diameter = document.querySelectorAll('.diameter'),
    quantity = document.querySelectorAll('.quantity'),
    well = document.querySelectorAll('.well'),
    nameClient = document.getElementById('name_1'),
    telNumb = document.getElementById('phone_1'),
    popUps = document.querySelectorAll('.popup-content');

    let price = 0,
    total = 0,
    calcRes = document.getElementById('calc-result');

    well[1].style.display = 'none';
    well.forEach((elem) => {
        elem.style.textAlign = "center";
    })  

 
calcBlock.addEventListener('click', (event) => {

    let target = event.target;
    
    let target1 = target.closest('.panel-heading');
   
    let target2 = target.closest('.construct-btn');
 
    let target3 = target.closest('.onoffswitchType');
    

    if (target1 || target2) {
        event.preventDefault();
    }

    if (target1){
       calcHeaading.forEach((item, i) => {
            if (item === target1) {
                toggleCalcBlock(i);
            }
        });
    }
  

   if (target2) {
        calcBtn.forEach((item, i) => {
            if (item === target2) {
                toggleCalcNextBlock(i);
            }
        });
    }
    if (target3){
        selectType();
    }

      

    //diameter

   function diameterChoose (i){
    let diameterValue = parseFloat(diameter[i].options[diameter[i].selectedIndex].value);
    console.log(diameterValue);
    result['diameter'] = diameterValue;
   }


    //quantity
    function quantityChoose (i){
    let quantityrValue = parseFloat(quantity[i].options[quantity[i].selectedIndex].value);
    console.log(quantityrValue);
    result['quantity'] = quantityrValue;
    }

    if(result['type'] === "one"){
      price = 10000;    
      diameterChoose(0);
      quantityChoose(0);
    }else if( result['type'] === "two"){
      price = 15000;
      diameterChoose(1);
      quantityChoose(1);
    }
   
    calcOne(price);
    calcRes.setAttribute('placeholder', `примерная стоимость ${result['totalValue']} руб.`);

});

// type
   
function selectType(){
      
        
    let calckCheckPosition = getComputedStyle(calckCheck).marginLeft;
   
  
    if (calckCheckPosition === '0px') {
        well[0].style.display = 'none';
        well[1].style.display = 'block';
        console.log('two');
        result['type'] = "two";

    } else {
        well[1].style.display = 'none';
        well[0].style.display = 'block';
        console.log('one');
        result['type'] = "one";

    }

}

//accordeon

const toggleCalcBlock = (index) => {
    for (let i = 0; i < calcItemCont.length; i++) {
        if (index === i) {
            calcItemCont[i].style.display = "block";
        } else {
            calcItemCont[i].style.display = "none";
        }
    };
};

const toggleCalcNextBlock = (index) => {
    for (let i = 0; i < calcItemCont.length; i++) {
        if (index === i) {
            calcItemCont[i + 1].style.display = "block";
            calcItemCont[i].style.display = "none";
        }
    };
};



//bottom


calcBottomBloc.addEventListener('click', (event) => {
    let target = event.target;
    if (target === calcBottomCheck) {
        let calckBottomCheckPosition = getComputedStyle(calcBottomCheck).marginLeft;
        if (calckBottomCheckPosition === '0px') {
            result['bottom'] = false;
        } else {
            result['bottom'] = true;            
        }
    }

})

//distance

calcDistanceBloc.addEventListener('input', (event) => {
    let distanceInput = calcDistanceBloc.querySelector('input');
    distanceInput.value = distanceInput.value.replace(/[^0-9+]/, '');
    result['distance'] = +distanceInput.value;

})

//calc one

const calcOne = (price) => {
    console.log(`price ${price}`);
    total= 0 ;

  
   
    if (result['diameter'] === 2) {
       price *= 1.2;
    }

    if (result['quantity'] === 2) {
        price *= 1.3;
       
    } else if (result['quantity'] === 3){
        price *= 1.5;     
    }

 

    if (result['quantity'] === 1){
        total += price;
    }else if( result['quantity'] === 2){
        total += price*2; 
    }else if( result['quantity'] === 3){
        total += price*3; 
    }   


  if(result['type'] === "one" && result['bottom'] === true)  {
    total +=1000;
  }
  if(result['type'] === "two" && result['bottom'] === true)  {
    total +=2000;
  }

    result['totalValue'] = total;
};    


// форма

popUps[0].addEventListener('change', (event) => {
    event.preventDefault();
    result['nameClient'] = nameClient.value;
    result['telNumb'] = +telNumb.value;
});

const sendCalc = () => {

    popUps[0].addEventListener('submit', (event) => {
        event.preventDefault();
        let body = result;
        console.log(body);

        let inputs = document.querySelectorAll('input');
        inputs.forEach((elem) => {
            elem.value = '';
        });

        postData(body, () => {
            console.log('successMessage');
        }, (error) => {
            console.error('error');
        });

    });


    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {



            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                outputData();

            } else {
                errorData(request.status);

            }

        });


        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify(body));
    };

};

sendCalc();

}


export default calc;
   

















