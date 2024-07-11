document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const task = input.value.trim();
      if (task !== '') {
        addTask(task);
        input.value = '';
      }
    });
  
    todoList.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') {
        const taskItem = e.target.closest('li');
        deleteTask(taskItem);
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button>Delete</button>
      `;
      todoList.appendChild(li);
    }
  
    function deleteTask(taskItem) {
      taskItem.remove();
    }
  });
  