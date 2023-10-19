const form = document.getElementById('form');
const namalengkap = document.getElementById('namalengkap')
// console.log(namalengkap)
const notelepon = document.getElementById('notelepon')
const negara = document.getElementById('negara')
const email = document.getElementById('email')
const password = document.getElementById('password')
const konfirmpassword = document.getElementById('konfirmpassword')
// const errorElement = document.getElementById('errorMessage')

const namalengkapField = form.querySelector(".namalengkap-field")
const noteleponField = form.querySelector(".notelepon-field")
const emailField = form.querySelector(".email-field")
const passwordField = form.querySelector(".password-field")
const konfirmpasswordField = form.querySelector(".konfirmpassword-field")



form.addEventListener('submit', (e) => {
    const namalengkapValue = namalengkap.value.trim()
    const noteleponValue = notelepon.value.trim()
    // const negaraValue = negara.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const konfirmpasswordValue = konfirmpassword.value.trim()

   
    
    e.preventDefault()

    // var error = []

    if(namalengkapValue == '' || namalengkapValue == null){
        setErrorFor(namalengkap, 'Nama lengkap harus diisi')
        namalengkapField.classList.add("invalid")
    }else{
        setSuccessFor(namalengkap)
        namalengkapField.classList.add("valid")
    }

    if(noteleponValue == '' || noteleponValue == null){
        setErrorFor(notelepon, 'No telepon harus diisi')
        noteleponField.classList.add("invalid")
    }else if(noteleponValue.length < 10 || noteleponValue.length > 13){
        setErrorFor(notelepon, 'No telepon harus di antara 10-13 digit')
        noteleponField.classList.add("invalid")
    }else{
        setSuccessFor(notelepon)
        noteleponField.classList.add("valid")
    }

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
	
	if(konfirmpasswordValue === '') {
		setErrorFor(konfirmpassword, 'Konfirmasi password harus diisi')
        konfirmpasswordField.classList.add("invalid")
	} else if(passwordValue !== konfirmpasswordValue) {
		setErrorFor(konfirmpassword, 'Konfirmasi password tidak cocok')
        konfirmpasswordField.classList.add("invalid")
	} else{
		setSuccessFor(konfirmpassword)
        konfirmpasswordField.classList.add("valid")
	}

    if((namalengkapField.classList.contains("valid") && 
    emailField.classList.contains("valid") && 
    noteleponField.classList.contains("valid") &&
    passwordField.classList.contains("valid") && 
    konfirmpasswordField.classList.contains("valid"))){
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



