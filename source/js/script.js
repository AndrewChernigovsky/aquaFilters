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