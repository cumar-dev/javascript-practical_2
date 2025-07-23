const container = document.querySelector('.container');
const toggleBtn = document.querySelector('.toggle-button');
const openIcon = document.querySelector('.openIcon');
const closeIcon = document.querySelector('.closeIcon');
toggleBtn.addEventListener('click', function() {
    container.classList.toggle('active');
    if(container.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'flex';
    }else {
        openIcon.style.display = 'flex';
        closeIcon.style.display = 'none';
    }
}) 

const themeToggle = document.querySelector('.theme-toggle');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark-mode');
   updateIcons();
})

function updateIcons() {
     if(document.body.classList.contains('dark-mode')) {
        moon.style.display = 'flex';
        sun.style.display = 'none';
        localStorage.setItem("mode", "dark")
    }else {
        moon.style.display = 'none';
        sun.style.display = 'flex';
        localStorage.setItem("mode", "light");
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const saveToLocalStorage = localStorage.getItem("mode");
    if(saveToLocalStorage === "dark") {
        document.body.classList.add('dark-mode');
         moon.style.display = 'flex';
         sun.style.display = 'none';
    }else {
        document.body.classList.remove('dark-mode');
         moon.style.display = 'none';
    }
})