let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener('click', function(){
    if (menuBtnIcon.classList.contains('fa-bars')){
        menu.style.right = "0"
        menuBtnIcon.classList = "fa-solid fa-xmark"
    }
    else{
        menu.style.right = "-300px"
        menuBtnIcon.classList = "fa-solid fa-bars"
    }
})