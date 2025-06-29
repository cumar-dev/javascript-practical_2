const formRegistration = document.querySelector('#formRegistration');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('#error');
const success = document.querySelector('#success');

formRegistration.addEventListener('submit', function(event) {
    event.preventDefault();
    const isUsernamevalidate = validateUsername();
    const isemailValidate = validateEamil();
    const isPasswordvalidate = validatePassword();
    const isConfirmpasswordvalidate = validateConfirmpassword();

   error.textContent = '';
   success.textContent = '';
   
    if(!isUsernamevalidate) {
        name.focus();
        return;
    }else if(!isemailValidate) {
        email.focus();
        return;
    }else if(!isPasswordvalidate) {
        password.focus();
        return;
    }else if(!isConfirmpasswordvalidate) {
        confirmPassword.focus();
        return;
    }
       
    

   success.textContent = 'form registerd successfully';

}); 

function validateUsername() {
    if(name.value.trim() === '') {
        // error
        setError(name, "please enter your full name");
        return false;
    }else{
        // succcess
        setSuccess(name);
        return true;
    }
}

function validateEamil() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.value.match(emailPattern)) {
        setError(email, "please enter your valid email");
        return false;
    }else {
        setSuccess(email);
        return true;
    }
}

function validatePassword() {
    if(password.value.length < 8) {
        setError(password, "please enter your password at least 8 characters long..")
        return false;
    }else {
        setSuccess(password);
        return true;
    }
}

function validateConfirmpassword() {
 
if(password.value.trim() === "" || confirmPassword.value.trim() === "") {
        setError(confirmPassword, "please the two password are not same please check!");
    return false;
}

    if(password.value !== confirmPassword.value) {
        setError(confirmPassword, "please the two password are not same please check!");
        return false;
    }else {
        setSuccess(confirmPassword);
        return true;
    }
}

function setError(element, message) {
    // show class error
    element.classList.add('invalid');
    /// hide class success
    element.classList.remove('valid');
    error.textContent = message;
}

function setSuccess(element) {
    /// show class success
    element.classList.add('valid');
    // hide class error
    element.classList.remove('invalid');
}