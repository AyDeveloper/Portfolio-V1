/*LOADER EFFECT*/
const loaderMain = document.querySelector('.loader-main');
    window.addEventListener("load", function(){
            loaderMain.classList.add('hidePreloader')
    })


$(document).ready(function(){

    let $btns = $('.project-center .btn-group button');
    $btns.click(function(e){
        $('.project-center .btn-group button').removeClass('active');
        e.target.classList.add('active');
        
        let selector = $(e.target).attr('data-filter');
        $('.project-center .row-grid').isotope( {
            filter: selector
        }); 

        return false;
    })

    $('.project-center .btn-group #btn1').trigger('click');

    /*magnific popup*/
    $('.project-center .row-grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });


    // Owl Carousel
    $('.testimonial-content .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        nav:false,
        dots: true,
        smartSpeed: 700,
        margin: 30,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 2
            }, 
            1000: {
                items: 2
            }
        }
    })

})
  
/* SHOW NAV BAR*/
var toggleBtn = document.querySelector("#btn-toggle");
toggleBtn.addEventListener("click", function() {
    const nav = document.querySelector('.nav');
   
    const linksContainer = nav.querySelector('.links-container');
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    const links = nav.querySelector('.links');

    const linksHeight = links.getBoundingClientRect().height

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = "0px";
    }
});


// /*REMOVE MENU MOBILE*/
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(function(linksList){
//     linksList.addEventListener('click', function() {
//         const linksContainer = document.querySelector('.links-container');
//         linksContainer.classList.add('remove');
//     })
// });

 /* SHOW SCROLL TOP*/
window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    const scrollY = window.pageYOffset;
    //console.log(scrollY);
    if (scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

    /*show scroll top*/
    const scrollTop = document.getElementById('scroll-top');
    //console.log(scrollY);
    if (scrollY >= 700) {
        scrollTop.classList.add('show-scroll-top');
    } else {
        scrollTop.classList.remove('show-scroll-top');
    }
})



/*TYPING EFFECT*/
var typed = new Typed (".typing", {
    strings: ["Web Developer", "WordPress Designer", "Writer"],
    typeSpeed:100,
    backSpeed: 60,
    loop: true
})

var typed2 = new Typed (".typing-2", {
    strings: ["Web Developer", "WordPress Designer", "Writer"],
    typeSpeed:100,
    backSpeed: 60,
    loop: true
})


// Change Background
const changeTheme = document.querySelector('.change-theme');

changeTheme.addEventListener('click', e => {
    const body = document.body;
    body.classList.toggle('darkmode');
})