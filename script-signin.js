const form = document.getElementById('form');
const email = document.getElementById('email')
const password = document.getElementById('password')

const emailField = form.querySelector(".email-field")
const passwordField = form.querySelector(".password-field")


form.addEventListener('submit', (e) => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    e.preventDefault()

    if(emailValue == '' || emailValue == null){
        setErrorFor(email, 'Email harus diisi')
        emailField.classList.add("invalid")
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email tidak valid')
        emailField.classList.add("invalid")
    }else{
        setSuccessFor(email)
        emailField.classList.add("valid")
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password harus diisi')
        passwordField.classList.add("invalid")
    }else if(passwordValue.length <= 5){
        setErrorFor(password, 'Password harus lebih dari 5 digit')
        passwordField.classList.add("invalid")
	} else {
		setSuccessFor(password)
        passwordField.classList.add("valid")
	}

    if(emailField.classList.contains("valid") && 
    passwordField.classList.contains("valid")){
        location.href = form.getAttribute("action")
    }

})

function setErrorFor(input, message){
    const formInputBox = input.parentElement
    const small = formInputBox.querySelector('small')

    small.innerText = message

    formInputBox.className = 'form-input-box error'
}

function setSuccessFor(input){
    const formInputBox = input.parentElement
    formInputBox.className = 'form-input-box'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



