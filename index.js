

const container=document.querySelector('.container')
const registrationLink=document.querySelector('.registration-link')
const loginLink=document.querySelector('.login-link')


registrationLink.addEventListener('click', ()=>{
    removePopUp()  // if active
    container.classList.add('active')
})

loginLink.addEventListener('click', ()=>{
    removePopUp()  // if active
    container.classList.remove('active')
})

// taking registration details:

const registrationUsername=document.querySelector('#registration-username')
const registrationEmail=document.querySelector('#registration-email')
const registrationPassword=document.querySelector('#registration-password')
const registeredUsers=JSON.parse(localStorage.getItem('registeredUsers'))?? []

const registrationBtn=document.querySelector('.registration-btn')
registrationBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const minLength = 6;
    const minLowerCase = 1;
    const minUpperCase = 1;
    const minNumber = 1;
    const minSymbol = 1;
    if(!registrationUsername.value.trim()){
        showPopUp("red", "Username cannot be empty !")
        return
    } else if (!registrationEmail.value || !registrationEmail.value.trim()) {
        showPopUp ("red", "Email address cannot be empty !");
        return
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(registrationEmail.value)) {
        showPopUp("red", "Invalid email format !");
        return
    } else if (!registrationPassword.value || !registrationPassword.value.trim()) {
        showPopUp("red", "Password cannot be empty");
        return
    } else if (registrationPassword.value.length < minLength) {
        showPopUp("red", "Password must be at least 6 characters long") ;
        return
    } else {
        const hasLowerCase = /[a-z]/.test(registrationPassword.value);
        const hasUpperCase = /[A-Z]/.test(registrationPassword.value);
        const hasNumber = /[0-9]/.test(registrationPassword.value);
        const hasSymbol = /[^a-zA-Z0-9 ]/.test(registrationPassword.value);
    
        const charTypeCount = hasLowerCase + hasUpperCase + hasNumber + hasSymbol;
    
        if (charTypeCount < (minLowerCase + minUpperCase + minNumber + minSymbol)) {
          showPopUp("red", "Use uppercase, lowercase, number and symbol in password") ;
          return
        } else if (registrationPassword.value.toLowerCase() === registrationUsername.value.toLowerCase()) {
          showPopUp("red", "Password cannot be the same as your username !");
          return
        }
    }
    const newUser={
        username: `${registrationUsername.value}`,
        email: `${registrationEmail.value}`,
        password: `${registrationPassword.value}`,
    }
    let isAlready=false
    for (const user of registeredUsers){
        if (JSON.stringify(user.username) === JSON.stringify(newUser.username)){
            isAlready=true
            break
        }
    }
    if(isAlready){
        showPopUp("red", "Username already exists !")
    } else{
        showPopUp("green", "Registration Successfull!")
        registeredUsers.push(newUser)
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }
})

// login functionality:

const loginEmail=document.querySelector('#login-email')
const loginPassword=document.querySelector('#login-password')
const loginBtn=document.querySelector('.login-btn')

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let loggedUserName=null
    let validUser=false
    for (const user of registeredUsers){
        if (user.email===loginEmail.value && user.password===loginPassword.value){
            loggedUserName=user.username
            validUser=true
            break
        }
    }
    if(validUser){
        loginEmail.value=''
        loginPassword.value=''
        localStorage.setItem("loggedUserName",loggedUserName)
        activateWebsite()
    } else{
        showPopUp("red", "Invalid login details")
    }
})


// card click functionality

const card1=document.querySelector('.card1')
card1.addEventListener('click',()=>{
    window.location.href = "../veg/veg.html";
})
const card2=document.querySelector('.card2')
card2.addEventListener('click',()=>{
    window.location.href = "../nonveg/nonveg.html";
})
const card3=document.querySelector('.card3')
card3.addEventListener('click',()=>{
    window.location.href = "../vegan/vegan.html";
})