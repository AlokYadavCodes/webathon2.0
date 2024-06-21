
// pop up

const popUpdiv=document.querySelector('.popUp')
const PopUpMessage=document.querySelector('#PopUpMessage')
function showPopUp(message){
    PopUpMessage.innerHTML=message
    popUpdiv.classList.add('popUp-active')
}

const popUpcancelBtn=document.querySelector('#popUp-cancel')
popUpcancelBtn.addEventListener('click', popUpCancel)
function popUpCancel(){
    popUpdiv.classList.remove('popUp-active')
}

// pop up ends


const dishes=document.querySelector('.dishes')


let dishesInnerHtml=''
    for(let i=0; i<dishesArray.length; i++){
    dishesInnerHtml+=`<div class="dish">
                <div class="img-container">
                    <img src=${dishesArray[i].img} alt="">
                </div>
                <div class="dish-name"> ${dishesArray[i].name}

                </div>
                <div class="action-btn">
                    <button onclick="generateReviewPage(${i})" id="show-reviews">Reviews</button>
                </div>
            </div>`
}
dishes.innerHTML=dishesInnerHtml

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
                <img src=${dishesArray[i].img} alt="">
            </div>
            <div class="dish-name">${dishesArray[i].name}</div>
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
    dishesArray[i].reviews.forEach((review)=>{
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


// send button auto click on enter

// const feedbackElement=document.querySelector('#user-feedback')  // already declared above
// console.log(feedbackElement)
// feedbackElement.addEventListener('keypress', handleKeyPress)
// function handleKeyPress(event) {
//     console.log("hello")
//     if (event.key === 'Enter') {
//       button.click();
//     }
// }

function addReview(i){
    let userImage= document.querySelector('#user-image').value
    if (!userImage){
        userImage="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
    } 
    const userFeedback=document.querySelector('#user-feedback').value
    if(!userFeedback){
        showPopUp("Please enter your feedback !")
        return
    }
    const newReview={
        name: "Ramesh",
        review: userFeedback,
        profile_url: userImage,
    }
    dishesArray[i].reviews.unshift(newReview)
    localStorage.setItem('dishesArray',JSON.stringify(dishesArray))
    generateReviewPage(i)
}


//back button
function closeReviewPage(){
        const wrapper=document.querySelector('.wrapper')
        const reviewPage=document.querySelector('.review-page');
        wrapper.classList.remove('disabled')
        reviewPage.classList.remove('active')
}
