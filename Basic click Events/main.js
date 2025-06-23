// Basic click events
const button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    console.log("Hi What's app");
    alert("welcome mr omar");
  button.style.paddingTop = '10px';
    button.style.paddingBottom = '10px';
    button.style.paddingleft = '10px';
    button.style.paddingRight = '10px';
     button.style.backgroundColor = 'red';
       button.style.fontSize = '18px';
      button.style.borderRadius = '10px';
       button.style.border = 'none';
        button.style.color = 'white';
          button.style.fontWeight = '400'
})

// remove event listener
const removeBtn = document.querySelector('#removeBtn');
function hadleEventListener() {
    console.log("buuton clicked");
}
button.addEventListener('click', hadleEventListener);

removeBtn.addEventListener('click', function() {
    button.removeEventListener('click', hadleEventListener);
    console.log("btn enter stopped");
})


const myButtons = document.querySelector('#myButtons');

myButtons.addEventListener('click', function() {
    document.querySelector('#message').textContent = 'welcome customer';
})

const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', function() {
    // document.body.style.backgroundcolor = 'skyblue';
    document.body.style.backgroundColor = 'red';
})

const toggleButton = document.querySelector('#toggleButton');
const toggleText = document.querySelector('#toggleText');

toggleButton.addEventListener('click', function() {
    if(toggleText.style.display === 'none' ) {
        toggleText.style.display = 'flex';
        toggleButton.textContent = 'Hide';
    }else {
        toggleText.style.display = 'none';
        toggleButton.textContent = 'show';
    }
})

const countButton = document.querySelector('#countButton');
const count = document.querySelector('#count');

let counts = 0;

countButton.addEventListener('click', function() {
    counts++;
    count.textContent = counts;
})