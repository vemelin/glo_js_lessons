const repairContent = () => {
  const popup = document.querySelector('.popup.popup-repair-types');
  let data = {};

  const postData = () => {
    return new Promise ((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return;
          }
        if (request.status === 200) {
            data = JSON.parse(request.responseText);
            resolve(data);
        } else {
            reject(request.status);
        }
      });

      request.open('GET', './db/db.json');
      request.setRequestHeader('Content-type', 'application/json');
      request.send();
    });
  }

  let dataTemp = {};

  const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);    
  }

  const outputData = (data) => {
    dataTemp = data;
    clearFormBtn();
    clearFormContent();
    renderData(dataTemp);
    renderBtn(dataTemp);
    renderContext();

  };
  const errorData = () => {
    const status = popup.querySelector('.popup-repair-types-content__head-title');
    status.textContent = "Ошибка загрузки, повторите попытку позже!";
    status.style.color = 'red';
  };

  postData()
  .then(outputData)
  .catch(errorData);

  const renderBtn = (dataTemp) => {
    const btnWrapper = popup.querySelector('.nav-list.nav-list-popup-repair');
    dataTemp.forEach((el) => {
      if (el.title) {
        render(btnWrapper, menuBtnTemplate(el.title));
      }
    });
    btnEvent(dataTemp);
  };

  const btnEvent = (dataTemp) => {
    const btn = popup.querySelectorAll('.popup-repair-types-nav__item');
    btn.forEach(el => {
      el.addEventListener('click', () => {
        renderActiveBtn(btn, el, dataTemp);        
      });
    });
  };

  const renderActiveBtn = (btn, activeBtn, dataTemp) => { 
    let headText = popup.querySelector('#switch-inner');
    btn.forEach(el => {
      el.classList.remove('active');
    });
    headText.textContent = activeBtn.textContent;    
    activeBtn.classList.add('active');

    dataTemp.forEach(el => {  
      if (activeBtn.textContent === el.title) {
        renderContext(el.priceList); 
      }
    });
  };

  const renderContext = (data = 1) => {
    if (data === 1) {
      data = dataTemp[data].priceList;
    }
    let popupContentClear = popup.querySelectorAll('.popup-repair-types-content-table__list');
    removeAll(popupContentClear);
    const contentWrapper = popup.querySelector('.popup-repair-types-content-table');

    render(contentWrapper, menuCardWrapperTemplate());
    const wrapper = popup.querySelector('.popup-repair-types-content-table__list-wrapperPaste');

    data.forEach(el => {      
      render(wrapper, menuCardTemplate(el));
    });
  };

  const clearFormBtn = () => {
    const btnRemove = popup.querySelectorAll('.popup-repair-types-nav__item');
    removeAll(btnRemove);
  };
  const clearFormContent = () => {
    const popupContent = popup.querySelectorAll('.popup-repair-types-content-table__list');
    removeAll(popupContent);
  };

  const remove = (element) => {
    element.remove();
  };

  const removeAll = (element) => {
    element.forEach(el => {
      remove(el);
    });
  };

  const menuBtnTemplate = (text) => {
   return (`<button class="button_o popup-repair-types-nav__item">${text}</button>`)
  };

  const menuCardTemplate = (el) => {
  return (`
    <tr class="mobile-row">
      <td class="repair-types-name">${el.typeService}</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
      <td class="repair-types-value">${el.units}<sup>2</sup></td>
      <td class="repair-types-value">${el.cost} руб.</td>
    </tr>
  `)};
 
  const menuCardWrapperTemplate = () => {
    return (`
    <table class="popup-repair-types-content-table__list">
      <tbody class="popup-repair-types-content-table__list-wrapperPaste">
      </tbody>
    </table>
    `)};

  const renderData = (dataTemp) => {
    const popupData = popup.querySelector('.popup-repair-types-content__head-date');
    popupData.textContent = dataTemp[0].date;
  };
};

export default repairContent;