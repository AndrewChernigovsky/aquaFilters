document.addEventListener("DOMContentLoaded", ()=> {
    var swiper = new Swiper(".swiper-main", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-main__button-next",
          prevEl: ".swiper-main__button-prev",
        },
        pagination: {
          el: ".swiper-main__pagination",
        },
        speed: 400,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-main__pagination',
          clickable: true,
          dynamicBullets: false,
        },
        navigation: {
          nextEl: '.swiper-main__button-next',
          prevEl: '.swiper-main__button-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        grabCursor: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
        mousewheel: {
          sensitivity:1,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
          delay: 40000,
        },
    });
});

let visuallyHidden = 'visually-hidden';
let btnMenuMain = document.getElementById('btnMenuMain');
let headerInner = document.querySelector('.main-header__inner');
let mainMenu = document.querySelector('.main-menu');

if (btnMenuMain) {
    if (btnMenuMain.classList.contains(visuallyHidden)) {
        btnMenuMain.classList.remove(visuallyHidden)
    } 
}

if (mainMenu) {
    if(mainMenu.classList.contains('main-menu--nojs')) {
        mainMenu.classList.remove('main-menu--nojs')
    }
};

btnMenuMain.addEventListener('click', ()=> {
    headerInner.classList.toggle('menu-none')

    if (mainMenu.classList.contains('main-menu--closed')) {
        mainMenu.classList.remove('main-menu--closed')
        mainMenu.classList.add('main-menu--opened')
    } else {
        mainMenu.classList.add('main-menu--closed')
        mainMenu.classList.remove('main-menu--opened')
    }
})

$(".products__wrapper .products__tab").click(function() {
	$(".products__wrapper .products__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".products__tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");