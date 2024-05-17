const dropdownList = document.querySelectorAll('.dropdown-list');
const dropdownCaption = document.querySelectorAll('.open-dropdown');
const arrow = document.querySelectorAll('.arrow');
const mobileMenu = document.querySelector('.mobile-menu');
dropdownCaption.forEach((caption, index) =>{
    caption.addEventListener('click', function(){
        let isOpen = dropdownList[index].classList.contains('open-dropdown-menu');
        dropdownList.forEach((dropdown, dropdownIndex) => {
            if (dropdownIndex !== index || isOpen) {
                dropdown.classList.remove('open-dropdown-menu');
                arrow[dropdownIndex].src = 'images/icon-arrow-down.svg';
                dropdownCaption[dropdownIndex].classList.remove('active-caption');
            }
        });
        if (!isOpen) {
            dropdownList[index].classList.add('open-dropdown-menu');
            arrow[index].src = 'images/icon-arrow-up.svg';
            caption.classList.add('active-caption');
        }
    });
});

const openIcon = document.querySelector('.open-menu-icon');
const closeIcon = document.querySelector('.close-menu-icon > img');
function openMenu(){
    document.body.classList.add('block-scrollY');
    mobileMenu.classList.add('open-mobile-menu');
}
function closeMenu(event){
    let isClickMenu = mobileMenu.contains(event.target);
    let isClickOpen = openIcon.contains(event.target);
    let isClickClose = closeIcon.contains(event.target);
    if(!isClickMenu && !isClickOpen || isClickClose){
        if(mobileMenu.classList.contains('open-mobile-menu')){
            for(f = 0;f < arrow.length;f++){
                arrow[f].src = 'images/icon-arrow-down.svg';
                dropdownList[f].classList.remove('open-dropdown-menu');
                dropdownCaption[f].style.color = 'var(--medium-gray)';
            }
            mobileMenu.classList.remove('open-mobile-menu');
        }
        document.body.classList.remove('block-scrollY');
    }
}

openIcon.addEventListener('click', openMenu);
document.addEventListener('click', closeMenu);
