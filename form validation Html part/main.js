const form = document.querySelector('#registration');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.querySelector('#userName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const error = document.querySelector('#error');

    // console.log("enter your name");
/// userName checking 
if(username === '') {
    error.textContent = 'user name is required';
    return
}
   //regular exprssion

	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // checking email
    if(!email.match(emailPattern)) {
        error.textContent = 'please enter a valid email';
        return
    }

    if(password.length < 3) {
    checking.textContent = 'please check the password';
    return
   }

    if(password !== confirmPassword) {
        error.textContent = 'please check that the password are same';
        return
    }

    error.textContent = 'form Registerd successfully';
})