// const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('active');
    // console.log('button clicked ....');
})