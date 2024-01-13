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