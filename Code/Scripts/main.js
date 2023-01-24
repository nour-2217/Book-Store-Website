// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

/*==================== Search Form ====================*/
const searchForm = selectElement('.search-form');
const searchBtn = selectElement('#search-btn');

searchBtn.onclick = () =>{
  searchForm.classList.toggle('active');
}


/*==================== Log In Form ====================*/
const loginForm = selectElement('.login-form-container');
const loginBtn = selectElement('#login-btn');
const loginBtnClose = selectElement('#close-login-btn');

loginBtn.onclick = () =>{
  loginForm.classList.toggle('active');
}

loginBtnClose.onclick = () =>{
  loginForm.classList.remove('active');
}


/*==================== Page Styles on Load ====================*/
const header = selectElement('.header .header-2');

window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 80){
      header.classList.add('active');
    }else{
      header.classList.remove('active');
    }
}


/*==================== Header Styles on Load ====================*/
window.onload = () =>{

    if(window.scrollY > 80){
      header.classList.add('active');
    }else{
      header.classList.remove('active');
    }
  
    fadeOut();
}


/*==================== Loader ====================*/
const loaderContainer = selectElement('.loader-container');

function loader(){
    loaderContainer.classList.add('active');
}
  
function fadeOut(){
    setTimeout(loader, 4000);
}


/*==================== Swipers ====================*/
// Books Slider Swiper
var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});
  

// Featured Slider Swiper
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    450: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,
    },
    },
});


// Arrivals Slider Swiper  
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});
  

// Reviews Slider Swiper
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});
  

// Blogs Slider Swiper
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});