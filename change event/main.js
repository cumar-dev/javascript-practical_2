const optionColor = document.querySelector('#color');
const selectedColor = document.querySelector('#selectedColor');

optionColor.addEventListener('change', function() {
   // console.log("changed",optionColor.value);
   selectedColor.textContent = `selected color is: ${optionColor.value}`;
})

const username = document.querySelector('#username');
const name = document.querySelector('#name');

username.addEventListener('change', function() {
    // console.log("name is", username.value);
    name.textContent = `display your name is: ${username.value}`;
    name.style.color = 'green';
})


const btn1 = document.querySelector('.html');
const btn2 = document.querySelector('.css');
const btn3 = document.querySelector('.javascript');




function html() {
    btn1.style.display = 'flex';
     btn1.style.justifyContent = 'center';
    btn1.style.alignItems = 'center';
      btn1.style.flexDirection = 'column'
      btn1.style.cursor = 'pointer';
      btn1.style.transition = 'all 0.3s ease'
}
function css() {
    btn2.style.display = 'flex';
     btn2.style.justifyContent = 'center';
    btn2.style.alignItems = 'center';
    btn2.style.flexDirection = 'column'
    btn2.style.cursor = 'pointer';
      btn2.style.transition = 'all 0.3s ease'
}
function javascript() {
    btn3.style.display = 'flex';
     btn3.style.justifyContent = 'center';
    btn3.style.alignItems = 'center';
      btn3.style.flexDirection = 'column'
      btn3.style.cursor = 'pointer';
      btn3.style.transition = 'all 0.3s ease'
}