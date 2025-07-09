const formBlog = document.querySelector('#blogBost');
const PostTitle = document.querySelector('#Post-Title');
const imageURL = document.querySelector('#Image-URL');
const textMessage = document.querySelector('#text-message');
const outputData = document.querySelector('#output-data');


formBlog.addEventListener('submit', addBlog);

document.addEventListener("DOMContentLoaded", loadedTasks);
function loadedTasks(){
const tasks = getdataToLocalStorage();
tasks.forEach(task => {
     displayPost(task.title, task.image, task.message);
     manipulatingData();
});
}

function addBlog(event) {
   event.preventDefault();
  const Title = PostTitle.value.trim();
  const image = imageURL.value.trim();
  const message = textMessage.value.trim();
//   postedTitle();
//   enterYourImage();
//   addMessge();
//   manipulatingData();
//   savedataFromLocalstorage(task);
if(!Title, !image, !message)
    return;
displayPost(Title, image, message);
manipulatingData();

 const task = {
    id: Date.now(),
    title: Title,
    image: image,
    message: message
  };

  savedataFromLocalstorage(task);

  formBlog.reset();

}

function displayPost(Title, image, message) {
    if(Title !== "") {
    const newPost = document.createElement('h3');
    newPost.textContent = Title;
    newPost.style.textAlign = "start";
    newPost.style.paddingBottom = "7px";
    outputData.appendChild(newPost);
    }

    if(image !== "") {
    const imageEnterd = document.createElement('img');
    imageEnterd.setAttribute('src', image);
    imageEnterd.style.maxWidth = "100%";
    outputData.appendChild(imageEnterd);
    }
    
    if(message !== "") {
      const messageSented = document.createElement('p');
    messageSented.style.textAlign = "start";
    messageSented.style.marginBottom = "7px"
    messageSented.textContent = message;
     outputData.appendChild(messageSented)
    }
}

// function postedTitle() {
//     if(postedTitle !== "") {
//       const newPost = document.createElement('h3');
//     newPost.textContent = PostTitle.value.trim();
//     newPost.style.textAlign = "start";
//     newPost.style.paddingBottom = "7px";
//     outputData.appendChild(newPost);
//     }


//     // return {
//     //     id: Date.now(),
//     //    Text: PostTitle.value.trim()
//     // }
//     // return task;
// }
// function enterYourImage() {
// if(enterYourImage !== "") {
//   const imageEnterd = document.createElement('img');
// imageEnterd.setAttribute('src', imageURL.value.trim());
// imageEnterd.style.maxWidth = "100%";
// outputData.appendChild(imageEnterd);
// }

//     //  return {
//     //     id: Date.now(),
//     //     Image: imageURL.value.trim()
//     // }
//     // return task;
// }

// function addMessge() {
    
//     if(addMessge !== "") {
//         const messageSented = document.createElement('p');
//     messageSented.style.textAlign = "start";
//     messageSented.style.marginBottom = "7px"
//     messageSented.textContent = textMessage.value.trim();
//      outputData.appendChild(messageSented)
//     }
   
//     //  return {
//     //     id: Date.now(),
//     //     Text: textMessage.value.trim()
//     //  }
//     //  return task;
// }

function manipulatingData() {
    const li = document.createElement('li');
    li.innerHTML = `
    <button class= "btn-edit" type="submit">Edit</button>
     <button class= "btn-delete" type="submit">Delete</button>`
    // li.dataset.id = (recordNewdata.id); 
    li.style.listStyle = 'none';
    li.style.textAlign = 'start';        
      outputData.appendChild(li);      
}


 function savedataFromLocalstorage(task) {
  const oldData = getdataToLocalStorage();
  oldData.push(task);
   localStorage.setItem("tasks", JSON.stringify(oldData));
}

function getdataToLocalStorage() {
    const oldData = JSON.parse(localStorage.getItem("tasks")) || [];
   return oldData;
}