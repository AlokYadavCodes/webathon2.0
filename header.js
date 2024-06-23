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
    // setTimeout(() => {
    //     removePopUp()
    // }, 5000);
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