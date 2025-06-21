const items = document.querySelector('#list');

function addItem() {
    // console.log("add new item ...");
    const newItem = document.createElement('li');
    newItem.textContent = "item3";
    // console.log(newItem);
    list.appendChild(newItem);
}

const data = document.querySelector('.items');
// console.log(data);

function addItems() {
    // for(i = 0; i < 10; i++) {
    //     console.log(i);
    // }

    const putdata = document.createElement('h1');
    putdata.textContent = "number 3";
    // console.log(putdata);
    data.appendChild(putdata);
}

const photos = document.querySelector('.imageContainer');

function display() {
    const data = document.createElement('img');
    data.src = "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    data.alt = "placeholder image";
  
    photos.appendChild(data);
}

const btn = document.querySelector('.newBtn');
const dynamicBtn = document.createElement('button');
dynamicBtn.textContent = "click Me!"
dynamicBtn.id = "dynamicBtn";

btn.appendChild(dynamicBtn);


