let header = document.querySelector('#header');
console.log(header);
const text = document.querySelector('.text');
console.log(text);
function changeContent() {
    header.textContent = "welcome to dom";
}

function click() {
    console.log("click this button")
}

// click();

function changeElement() {
    text.innerHTML = "welcome to my <strong> website </strong>"
}

function changeText() {
    document.querySelector('#demo').innerHTML = "Text has been changed";
}

function changeTexts() {
    document.querySelector('#demos').style.color = "red";
}

function showAlert() {
    alert("Button was clicked");
}


function showInput() {
    let inputvalue = document.querySelector('#myInput').value;
    document.querySelector('#output').innerHTML = "you typed:" + inputvalue;
}

function Hide() {
    document.querySelector('.hide').style.display = "none";
}

let output = document.querySelector('#headers').style.color = "red";
console.log(output);

function click() {
    const data = [1,2,3,4,5,6,7,8,9,10];
    console.log(data);
    for(i = 0; i < 10; i++) {
        console.log(data[i]);
    }
}
click();
