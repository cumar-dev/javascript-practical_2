const toDoform = document.querySelector('#toDoform');
const appTodo = document.querySelector('#appTodo');
const todoList = document.querySelector('#todoList');


toDoform.addEventListener('submit', addTask)




function addTask(event) {
event.preventDefault();

const taskText = appTodo.value.trim();
// console.log(taskText);

// console.log('hi whats App');
if(taskText !== "") {
const task = {
    id : Date.now(),
    Text : taskText,
    completed: false
}
addToTaskDom(task);
appTodo.value = "";

}
}



function addToTaskDom(task) {
 const li = document.createElement('li');
 li.className = `todo-item completed`;
 li.dataset.id = task.id;
 li.style.listStyle = 'none';
//  console.log(li);
li.innerHTML = `
<input type="checkbox">
          <span class= "task" > ${task.Text} </span>
            <button class= "btn" type="submit">Edit</button>
            <button class= "btn-delete" type="submit">Delete</button>`
            // console.log(li);
    todoList.appendChild(li);        
}
