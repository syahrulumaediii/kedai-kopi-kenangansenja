// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');


// ketika di klik
document.querySelector('#hamburger-menu').onclick =() =>{
    navbarNav.classList.toggle('active');
};

// Klik diluar side bar di luar nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});