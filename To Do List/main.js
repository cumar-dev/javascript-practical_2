//Step 1 Adding Tasks
const toDoform = document.querySelector('#toDoform');
const appTodo = document.querySelector('#appTodo');
const todoList = document.querySelector('#todoList');

/// Add event listener to the form
toDoform.addEventListener('submit', addTask)

// 2. Displaying Tasks from Local Storage
/// data reading from local storage
document.addEventListener("DOMContentLoaded", loadedTasks);

function loadedTasks() {
    const tasks = getdataToLocalStorage();
    // console.log(tasks);
  tasks.forEach(task=> {
    addToTaskDom(task);
  })
    
  
}

//Step 3: Define the add task function

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
savetaskToLocalstorage(task);
appTodo.value = "";

}
}

///Step 4: Define the addTaskToDOM Function Using Plain HTML

function addToTaskDom(task) {
 const li = document.createElement('li');
 li.className = `todo-item completed, ${task.completed ? "completed" : ""}`;
 li.dataset.id = task.id;
 li.style.listStyle = 'none';
//  console.log(li);
li.innerHTML = `
<input type="checkbox" class= "complete-checkbox" ${task.completed ? "checked" : ""}>
          <span class= "task" > ${task.Text} </span>
            <button class= "btn-edit" type="submit">Edit</button>
            <button class= "btn-delete" type="submit">Delete</button>`
            // console.log(li);
    todoList.appendChild(li);
    
    
    attachEventlisteners(li, task);
}

/// Step 5: Define the attachEventListeners Function
function attachEventlisteners(li, task) {
  const deleteBtn = li.querySelector(".btn-delete", task);
  const editBtn = li.querySelector(".btn-edit");
  const checkBox = li.querySelector(".complete-checkbox")
  // console.log(deleteBtn,task);
  deleteBtn.addEventListener("click", function() {
    // console.log("delete btn clicked", task);
    handleDeletetask(task.id, li);

   
  })

  
  editBtn.addEventListener("click", function() {
  handleEdit(task.id, li);
});

checkBox.addEventListener("change", function() {
  // console.log("checked", checkBox.checked);
  toggleTaskCompletion(task.id, li, checkBox.checked)
})

}
/// Delete data from local storage and dom
function handleDeletetask(id, li) {
  let tasks = getdataToLocalStorage();
tasks = tasks.filter(task => task.id != id);
// console.log(tasks);

localStorage.setItem("tasks", JSON.stringify(tasks));
li.remove();
}

function handleEdit(taskId, li) {
  const taskSpan = li.querySelector(".task");
  // console.log(taskSpan);
  // console.log(taskSpan.textContent);
  const newTasktext = prompt("edit your task", taskSpan.textContent);
  // console.log(newTasktext);

  if(newTasktext !== null && newTasktext !== "") {
    // update the localStorage
  
    updateTask(taskId, newTasktext)

    /// update the dom inreal Time
    taskSpan.textContent = newTasktext;
  }
}

function updateTask(id, newTasktext) {
const tasks = getdataToLocalStorage();
const task = tasks.find(task => task.id == id);
if(task) {
  task.Text = newTasktext;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
}

function toggleTaskCompletion(taskId, li, isCompleted) {
  const tasks = getdataToLocalStorage();
  const task = tasks.find(task => task.id == taskId);


  if(task) {
    task.completed = isCompleted;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      li.classList.toggle("completed", isCompleted);
  }
}
function savetaskToLocalstorage(task) {

    // const oldTask = localStorage.getItem("tasks");

    // const oldTask = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const oldTask = getdataToLocalStorage();

    oldTask.push(task);

    // console.log(oldTask);

    localStorage.setItem("tasks", JSON.stringify(oldTask));
}

function getdataToLocalStorage() {
 const oldTask = JSON.parse(localStorage.getItem("tasks")) || [];
 return oldTask;
}