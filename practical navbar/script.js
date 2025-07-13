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