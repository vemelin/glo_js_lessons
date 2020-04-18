const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

function show(){  
   document.querySelector('#city').textContent = ''
   document.querySelector('.result').textContent = ''
   //получить значение option
  let val = this.value
  //получить ключи в объекте
      for(let i of Object.keys(cityArr)) {
        //сравнить ключ с option
       if(val === i) {
   
       cityArr[i].forEach(elem => {
           let newElem = document.createElement('option');
           newElem.value = i
           newElem.textContent = elem;
          document.querySelector('#city').style.display = 'inline-block'
          document.querySelector('#city').append(newElem)   
         
            // записать значение выбранной опции в результат
          document.querySelector('.result').textContent = this.options[this.selectedIndex].textContent +  ' ' +  
            
            // вот здесь записалось, но не меняется при переключении опций
          document.querySelector('#city').options[document.querySelector('#city').selectedIndex].textContent;  
         
           });
       }
    }         
}
//изменить аттребут 'click' на 'change'
document.querySelector('#country').addEventListener('change', show);

