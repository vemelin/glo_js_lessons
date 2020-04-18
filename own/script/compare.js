const cities = {
  russia: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  ukraine: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  belarus: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  japany: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}


let getCountry = document.getElementById('country'),
  getCity = document.getElementById('city'),
  result = document.querySelector('.result'),
  textArr = [];

  
getCountry.addEventListener('change', () => {
  getCity.style.display = 'inline-block';

  let country = getCountry.value;
    textArr[0] = getCountry.options[getCountry.selectedIndex].text;

  while(getCity.childNodes.length) {
      getCity.removeChild(getCity.firstChild);
  }    
    
  let newArray = cities[country];
  console.log(country);
  for(let i = 0; i < newArray.length; i++){
      let opt = document.createElement('option');
      opt = new Option(newArray[i], newArray[i]);
      getCity.append(opt); 
  } 
  result.innerHTML = textArr[0];
});

getCity.addEventListener("change", () => {
  textArr[1] = getCity.options[getCity.selectedIndex].text;
  result.innerHTML = textArr.join(', ');
});