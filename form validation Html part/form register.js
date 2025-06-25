const formRegister = document.querySelector('#formRegister');

formRegister.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const checking = document.querySelector('#checking');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if(userName === "") {
    checking.textContent = 'please enter your name';
    return
   }

   if(!email.match(emailPattern)) {
    checking.textContent = 'enter your valid email';
    return
   }

   if(password.length < 3) {
    checking.textContent = 'please check the password';
    return
   }

   if (password !== confirmPassword) {
    checking.textContent = 'please the two password are not same';
    return
   }

    checking.textContent = 'form registerd succesfully'

})