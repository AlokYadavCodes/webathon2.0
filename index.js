let isLoggedIn=JSON.parse(localStorage.getItem('isLoggedIn')) ?? false
if (isLoggedIn){
    activateWebsite()
} else{
    deactivateWebsite();
}

const container=document.querySelector('.container')
const registrationLink=document.querySelector('.registration-link')
const loginLink=document.querySelector('.login-link')
const popUpdiv=document.querySelector('.registration-popUp')


registrationLink.addEventListener('click', ()=>{
    popUpCancel()
    container.classList.add('active')
})

loginLink.addEventListener('click', ()=>{
    popUpCancel()
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
    if(!(registrationUsername.value && registrationEmail.value && registrationPassword.value)) showPopUp("Fill all fields !")
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
        popUpdiv.classList.add('duplicate')
        showPopUp("Duplicate registration")
    } else{
        popUpdiv.classList.remove('duplicate')
        showPopUp("Registration Successfull!")
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
    let validUser=false
    for (const user of registeredUsers){
        if (user.email===loginEmail.value && user.password===loginPassword.value){
            validUser=true
            break
        }
    }
    if(validUser){
        loginEmail.value=''
        loginPassword.value=''
        activateWebsite()
    } else{
        showPopUp("Invalid login details")
    }
})


//  popUp messagae:
const PopUpMessage=document.querySelector('#PopUpMessage')
function showPopUp(message){
    PopUpMessage.innerHTML=message
    popUpdiv.classList.add('popUp-active')

    registrationUsername.setAttribute('disabled','')
    registrationEmail.setAttribute('disabled','')
    registrationPassword.setAttribute('disabled','')
    loginEmail.setAttribute('disabled','')
    loginPassword.setAttribute('disabled','')

}

const popUpcancelBtn=document.querySelector('#popUp-cancel')
popUpcancelBtn.addEventListener('click', popUpCancel)
function popUpCancel(){
    popUpdiv.classList.remove('popUp-active')

    registrationUsername.removeAttribute('disabled','')
    registrationEmail.removeAttribute('disabled','')
    registrationPassword.removeAttribute('disabled','')

    loginEmail.removeAttribute('disabled','')
    loginPassword.removeAttribute('disabled','')

}

// activate deactive website
const logout=document.querySelector('#logout-btn')
logout.addEventListener('click', deactivateWebsite)

function activateWebsite(){
    isLoggedIn=true
    localStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn))
    document.querySelector('body').classList.add('website-active')
}

function deactivateWebsite(){
    isLoggedIn=false
    localStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn))
    document.querySelector('body').classList.remove('website-active')
}


// search functionality
const searchArr = [
    "Butter Chicken",
    "Dosa",
    "Saag Paneer",
    "Biryani",
    "Vada Pav",
    "Naan",
    "Palak Paneer",
    "Chole Bhature",
    "Samosa",
    "Masala Dosa",
    "Dal Makhani",
    "Tandoori Chicken",
    "Aloo Gobi",
    "Idli",
    "Samosa Chaat",
    "Pav Bhaji",
    "Gulab Jamun",
    "Chicken Tikka Masala",
    "Rogan Josh",
    "Aloo Tikki",
    "Keema Naan",
    "Filter Coffee",
    "Jalebi",
    "Rajma Chawal",
    "Litti Chokha",
    "Pesarattu",
    "Pongal",
    "Uttapam",
    "Chicken 65",
    "Fish Curry"
  ];
  
const searchBar=document.querySelector('#main-search')
const mainSearchElement=document.querySelector('.main-search-area')
searchBar.addEventListener('input',()=>{
    let inputText=searchBar.value.toUpperCase()
    mainSearchElement.innerHTML=''
    if(!inputText){
        mainSearchElement.classList.add('hide')
        return
    }
    mainSearchElement.classList.remove('hide')
    searchArr.forEach((val)=>{
        if(val.toUpperCase().includes(inputText)){
            console.log(val)
            mainSearchElement.innerHTML+=`<div class="search-item">${val}</div>`
        }
    })

})


// card click functionality

const card1=document.querySelector('.card1')
card1.addEventListener('click',()=>{
    window.location.href = "../veg/veg.html";
})