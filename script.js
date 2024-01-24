const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const seta = document.querySelectorAll('.seta');
const dropdownList = document.querySelectorAll('.dropdown-list');
for(let i = 0; i < dropdownMenu.length; i++){
    dropdownMenu[i].addEventListener('click', function(){
        if(dropdownList[i].style.display == 'flex'){
            dropdownList[i].style.display = 'none';
            seta[i].src = 'images/icon-arrow-down.svg';
        }else{
            dropdownList[i].style.display = 'flex';
            seta[i].src = 'images/icon-arrow-up.svg';
        }
    });
}
const Mobile_menu = document.querySelector("#mobile-menu");
const Open_close_menu = document.querySelectorAll(".open-close-menu");
for(let o = 0; o < Open_close_menu.length;o++){
    Open_close_menu[o].addEventListener('click', function(){
        if(Mobile_menu.style.display == 'flex'){
            Mobile_menu.style.display = 'none';
        }else{
            Mobile_menu.style.display = 'flex';
        }
    });
}