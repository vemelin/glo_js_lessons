'use sctrict';

let  todoControl = document.querySelector('.todo-control'),
     headerInput = document.querySelector('.header-input'),
     todoList = document.querySelector('.todo-list'),
     todoCompleted = document.querySelector('.todo-completed');

let todoData = [],
   putToMemory = () => {
      localStorage.setItem('key', JSON.stringify(todoData));
   };

const render = () =>  {
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData = JSON.parse(localStorage.getItem('key')) || [];

  todoData.forEach((item) => {
   let li = document.createElement('li');

   li.classList.add('todo-item');
   li.innerHTML = `
      <span class='text-tod'>${item.value}</span>
      <div class='todo-buttons'>
         <button class='todo-remove'></button>
         <button class='todo-complete'></button>
      </div>`;

   if(item.completed) {
      todoCompleted.append(li);
   } else {
      todoList.append(li);
   }

    //Send list of items as completed
   let todoCompletedButton = li.querySelector('.todo-complete');
   todoCompletedButton.addEventListener('click', () => {
      item.completed = !item.completed;
      putToMemory();
      render();
   });

    //Remove items from array
   let removeItemsFromTodo = li.querySelector('.todo-remove');
   removeItemsFromTodo.addEventListener('click', () => {
      todoData.splice(todoData.indexOf(item), 1);
      putToMemory();
      render();
   });
  });

  //Clear header input field
  headerInput.value = '';
};

todoControl.addEventListener('submit', () => {
   event.preventDefault();

   const newTodo = {
      value: headerInput.value,
      completed: false
   };

   //Check that create field is not empty
   if(headerInput.value.trim() !== '') {
      this.value = headerInput.value;
      this.completed = false;
   } else {
      return;
   }

   // Add to the new obj array
   todoData.push(newTodo);
   putToMemory();
   render();
});

render();