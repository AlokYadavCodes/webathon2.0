

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
    if(!(registrationUsername.value && registrationEmail.value && registrationPassword.value)){
        showPopUp("red", "Fill all fields !")
        return
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
        showPopUp("red", "Duplicate registration !")
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
            mainSearchElement.innerHTML+=`<div class="search-item">${val}</div>`
        }
    })

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