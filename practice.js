const toDoApp = document.querySelector('#to-doApp');
const inputList = document.querySelector('#inputList');
const classList = document.querySelector('.classList');

toDoApp.addEventListener('submit',addTask);


function addTask(e) {
    e.preventDefault();
const tasktext = inputList.value.trim();
// console.log(tasktext);
// console.log(new Date (Date.now()));


if(tasktext !== "") {
    const task = {
    id : Date.now(),
    Text : tasktext,
    completion : false
}
addToTaskDom(task);
inputList.value = "";
}

}

function addToTaskDom(task) {
    const li = document.createElement('li');
    li.className = `calss-item`;
    li.dataset.id = task.id;
    li.style.listStyle = "none";
    li.innerHTML = `
   <input type="checkbox">
          <span class= "task" > ${task.Text} </span>
            <button class= "btn" type="submit">Edit</button>
            <button class= "btn-delete" type="submit">Delete</button>` 
            // console.log(li);
    classList.appendChild(li);
}

