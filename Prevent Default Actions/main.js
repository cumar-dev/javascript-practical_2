const Form = document.querySelector('#myForm');
const submitData = document.querySelector('#submitData');

Form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitData.textContent = 'Enter your name';
    // console.log("enter your name");
})

