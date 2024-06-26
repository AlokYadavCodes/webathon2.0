const dishes=document.querySelector('.dishes')

function generateDishes(){
    let dishesInnerHtml=''
    for(let i=0; i<veganDishes.length; i++){
    dishesInnerHtml+=`<div class="dish">
                <div class="img-container">
                    <img src=${veganDishes[i].img} alt="">
                </div>
                <div class="dish-name"> ${veganDishes[i].name}
                    <div class="name-gradient"></div>
                </div>
                <div class="action-btn">
                    <button onclick="generateReviewPage(${i})" id="show-reviews">Reviews</button>
                    <button id="share">Share</button>
                    </div>
                    <div id="share-option">
                        <a href="whatsapp://send?text=The%20syntax%20squad%20strikes%20again!%20Check%20out%20what%20Alok%20and%20Shivam%20came%20up%20with:%20https%3A%2F%2Fsyntaxsquadweb.vercel.app"> <i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a> 
                        <a href="https://twitter.com/intent/tweet?text=The%20syntax%20squad%20strikes%20again!%20Check%20out%20what%20Alok%20and%20Shivam%20came%20up%20with:%20https%3A%2F%2Fsyntaxsquadweb.vercel.app/"> <i class="fa-brands fa-x-twitter"></i></a> 
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook"></i></a> 
                    </div>
                </div>
            </div>`
    }
    dishes.innerHTML=dishesInnerHtml
    const addDishContainer=document.querySelector('.addDishContainer')
    addDishContainer.innerHTML=`<div class="btn">
                    <button id="addDish">Add your own dish</button>
                </div>
                
                <div class="addDishFields">
                    <input id="dish-pic" type="text" placeholder="Enter the dish picture url here">
                    <input id="dish-name" type="text" placeholder="Enter dish name here">
                    <button onclick="addDish()">Submit</button>
                </div>`
}
generateDishes()



function generateBackBtn(){
    const reviewPage=document.querySelector('.review-page');
    reviewPage.innerHTML=`<div class="back" onclick="closeReviewPage()"><span class="material-symbols-outlined">
            keyboard_backspace
            </span> Go back</div>`
}


function generateReviewPage(i){
    generateBackBtn()
    const wrapper=document.querySelector('.wrapper')
    const reviewPage=document.querySelector('.review-page');
    if(!reviewPage.classList.contains('active')){
        window.scrollTo(0,0)
    }
    wrapper.classList.add('disabled')
    reviewPage.classList.add('active')
    let allReviewsInnerHtml=generateAllReviewInnerHtml(i)
    
    reviewPage.innerHTML+=`<div class="dish-details">
            <div class="img-container">
                <img src=${veganDishes[i].img} alt="">
            </div>
            <div class="dish-name">${veganDishes[i].name}</div>
        </div>
        <div class="review-container">
            <div class="title">Add your review: </div>
            <div class="receive-feedback">
                <input type="text" name="" id="user-image" placeholder="Paste your profile photo link (not required)">
                <div class="write-send">
                    <input type="text" name="" id="user-feedback" placeholder="Write your review here...">
                    <button onclick="addReview(${i})">Send</button>
                </div>
            </div>
            <div class="title">All Reviews: </div>
            ${allReviewsInnerHtml}
        </div>`


        
}

function generateAllReviewInnerHtml(i){
    let allReviewsInnerHtml='';
    veganDishes[i].reviews.forEach((review)=>{
        allReviewsInnerHtml+=`<div class="review">
                <div class="img-and-name">
                    <img src=${review.profile_url} alt="">
                    <p>${review.name}</p>
                </div>
                <div class="feedback">${review.review}</div>
            </div>`
    })
    return allReviewsInnerHtml
}

function addReview(i){
    let userImage= document.querySelector('#user-image').value
    if (!userImage){
        userImage="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
    } 
    const userFeedback=document.querySelector('#user-feedback').value
    if(!userFeedback){
        showPopUp("red", "Please enter your feedback !")
        return
    }
    const newReview={
        name: localStorage.getItem('loggedUserName'),
        review: userFeedback,
        profile_url: userImage,
    }
    veganDishes[i].reviews.unshift(newReview)
    localStorage.setItem('veganDishes',JSON.stringify(veganDishes))
    generateReviewPage(i)
}


//back button
function closeReviewPage(){
        const wrapper=document.querySelector('.wrapper')
        const reviewPage=document.querySelector('.review-page');
        wrapper.classList.remove('disabled')
        reviewPage.classList.remove('active')
}


// add dish

const addYourOwnDishBtn=document.querySelector('#addDish')
const addDishField=document.querySelector('.addDishFields')
addYourOwnDishBtn.addEventListener('click', ()=>{
    addDishField.classList.toggle('active')
})

function addDish(){
    let dishPic=document.querySelector('#dish-pic').value
    if(!dishPic){
        dishPic="https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.jpg?s=612x612&w=0&k=20&c=t1I58CqucV6bLRaa4iDy7PIVjnV8D9eWDjEsX9X-87k="
    }
    const dishName=document.querySelector('#dish-name').value
    if(!dishName){
        showPopUp("red", "Please Enter the dish name !")
        return
    }
    const newDish={
        name: dishName,
        img: dishPic,
        reviews: [],
    }
    veganDishes.unshift(newDish)
    localStorage.setItem('veganDishes',JSON.stringify(veganDishes))
    reloadPage()
}

function reloadPage(){
    window.location.reload()
}

document.querySelector('#share').addEventListener('click',()=>{
    document.querySelector('#share-option').classList.toggle('active')
})