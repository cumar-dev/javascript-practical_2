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

const checkBox = document.querySelector('#subscribe');
const status = document.querySelector('#status');

checkBox.addEventListener('change', function(event) {
   if(event.target.checked) {
    status.textContent = 'you are subcribed';
   }else{
      status.textContent = 'you are unSubscribed';
   }
})


const fileUpload = document.querySelector('#fileUpload');
const fileName = document.querySelector('#fileName');

fileUpload.addEventListener('change', function(events) {
  const selectedFile = events.target.files[0];

  if(selectedFile) {
    fileName.textContent = `selected file: ${selectedFile.name}`;
  }else {
        fileName.textContent = 'No file selected.';
      }
})

const fileUploaded = document.querySelector('#fileUploaded');

fileUploaded.addEventListener('change', function(eventes) {
  const fileSelected = eventes.target.files;
  for(let i = 0; i < fileSelected.length; i++) {
    console.log(fileSelected[i].name);
  }
})