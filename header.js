let isLoggedIn=JSON.parse(localStorage.getItem('isLoggedIn')) ?? false
if (isLoggedIn){
    activateWebsite()
} else{
    deactivateWebsite();
}

// popup logic
const popUpDiv=document.querySelector('.popUp')
const PopUpMessage=document.querySelector('#PopUpMessage')
function showPopUp(color, message){
    if (color=="red"){
        popUpDiv.classList.remove('green')
        popUpDiv.classList.add('red')
    }
    else if(color=="green"){
        popUpDiv.classList.remove('red')
        popUpDiv.classList.add('green')
    }
    PopUpMessage.innerHTML=message
    popUpDiv.classList.add('active')
    if (isLoggedIn==false || isLoggedIn==null){
        registrationUsername.setAttribute('disabled','')
        registrationEmail.setAttribute('disabled','')
        registrationPassword.setAttribute('disabled','')
        loginEmail.setAttribute('disabled','')
        loginPassword.setAttribute('disabled','')
    }
    setTimeout(() => {
        removePopUp()
    }, 5000);
}

const popUpcancelIcon=document.querySelector('#popUp-cancel-icon')
popUpcancelIcon.addEventListener('click', removePopUp)
function removePopUp(){
    popUpDiv.classList.remove('active')
    if (!isLoggedIn){
        registrationUsername.removeAttribute('disabled','')
        registrationEmail.removeAttribute('disabled','')
        registrationPassword.removeAttribute('disabled','')
        loginEmail.removeAttribute('disabled','')
        loginPassword.removeAttribute('disabled','')
    }
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
    goBack()
}

function goBack() {
    if(window.document.location.pathname!="/")
    window.history.back();
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
    for(let i=0; i<dishesArray.length; i++){
        if(dishesArray[i].name.toUpperCase().includes(inputText)){
            mainSearchElement.innerHTML+=`<div class="search-item" onclick="searchClickHandler(1)">
                <img src=${dishesArray[i].img} alt="">
                <div class="item-text">
                    <p>${dishesArray[i].name}</p>
                    <small>Veg</small>
                </div>
            </div>`
        }
    }
    for(let i=0; i<nonvegDishes.length; i++){
        if(nonvegDishes[i].name.toUpperCase().includes(inputText)){
            mainSearchElement.innerHTML+=`<div class="search-item" onclick="searchClickHandler(2)">
                <img src=${nonvegDishes[i].img} alt="">
                <div class="item-text">
                    <p>${nonvegDishes[i].name}</p>
                    <small>Non-Veg</small>
                </div>
            </div>`
        }
    }
    for(let i=0; i<veganDishes.length; i++){
        if(veganDishes[i].name.toUpperCase().includes(inputText)){
            mainSearchElement.innerHTML+=`<div class="search-item" onclick="searchClickHandler(3)">
                <img src=${veganDishes[i].img} alt="">
                <div class="item-text">
                    <p>${veganDishes[i].name}</p>
                    <small>Vegan</small>
                </div>
            </div>`
        }
    }
    if (mainSearchElement.innerHTML==''){
        mainSearchElement.innerHTML+=`<div style="text-align: center; font-size:2rem;">
                    <p>No item found !</p>
                </div>`
    }
})

function searchClickHandler(i){
    if(i==1){
        window.location.href = "../veg/veg.html"
    }
    else if(i==2){
        window.location.href = "../nonveg/nonveg.html";
    }
    else if(i==3){
        window.location.href = "../vegan/vegan.html";
    }
}