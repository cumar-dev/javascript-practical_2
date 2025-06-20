const data = document.querySelector('.container');
// console.log(data);

function ouput() {
    const inputData = document.createElement('h1');
    inputData.textContent = "axmed";
    data.appendChild(inputData);
}

function remove() {
    if(data.lastChild) {
      data.removeChild(data.lastChild);
    }else {
        alert("there is no data in here!");
    }
   
}