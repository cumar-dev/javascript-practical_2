const Form = document.querySelector('#myForm');
const submitData = document.querySelector('#submitData');
const name = document.querySelector('#name');
Form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.createElement('li');
    nameInput.style.listStyle = 'none';
    nameInput.textContent = `${name.value}`;
    submitData.appendChild(nameInput);
})

