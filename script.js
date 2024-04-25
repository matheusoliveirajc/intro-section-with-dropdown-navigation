const dropdownList = document.querySelectorAll('.dropdown-list');
const dropdownCaption = document.querySelectorAll('.open-dropdown');
const arrow = document.querySelectorAll('.arrow');
const mobileMenu = document.querySelector('.mobile-menu');
dropdownCaption.forEach((caption, index) =>{
    caption.addEventListener('click', function(){
        dropdownList.forEach((dropdown, dropdownIndex) => {
            if (dropdownIndex !== index) {
                dropdown.classList.remove('open-dropdown-menu');
                arrow[dropdownIndex].src = 'images/icon-arrow-down.svg';
            }
        });
        dropdownList[index].classList.toggle('open-dropdown-menu');
        if (dropdownList[index].classList.contains('open-dropdown-menu')) {
            arrow[index].src = 'images/icon-arrow-up.svg';
            caption.style.color = 'var(--almost-black)';
        } else {
            arrow[index].src = 'images/icon-arrow-down.svg';
            caption.style.color = 'var(--medium-gray)';
        }
    });
});
const openIcon = document.querySelector('.open-menu-icon');
const closeIcon = document.querySelector('.close-menu-icon > img');
function menuClosed(){
    if(!mobileMenu.classList.contains('open-mobile-menu')){
        for(f = 0;f < arrow.length;f++){
            arrow[f].src = 'images/icon-arrow-down.svg';
            dropdownList[f].classList.remove('open-dropdown-menu');
            dropdownCaption[f].style.color = 'var(--medium-gray)';
        }
    }
}
function changeMenu(){
    document.body.classList.toggle('block-scrollY');
    mobileMenu.classList.toggle('open-mobile-menu');
    menuClosed();
    document.addEventListener('click', (event)=>{
        let isClickMenu = mobileMenu.contains(event.target);
        let isClickIcon = openIcon.contains(event.target);
        if(!isClickMenu && !isClickIcon){
            menuClosed();
            document.body.classList.remove('block-scrollY');
            mobileMenu.classList.remove('open-mobile-menu');
        }
    });
}
openIcon.addEventListener('click', changeMenu);
closeIcon.addEventListener('click', changeMenu);