//const Topbtns = document.querySelector('li');
const mainMenu = document.querySelector('ul');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);




//Burger nav bar
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close(){
    mainMenu.style.display="none";
}

