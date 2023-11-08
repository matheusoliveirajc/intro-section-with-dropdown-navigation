function drop_menu_desktop(item){
    if(item == 'features') {
        let menu = document.getElementsByClassName('dropdown-menu-desktop')[0]
        let item = document.getElementsByClassName('span-li')[0]
        let seta = document.getElementsByClassName('seta')[0]
        menu.style.display = 'flex'
        item.style.color = 'var(--almost-black)'
        seta.src = 'images/icon-arrow-up.svg'
    }else if(item == 'company') {
        let menu = document.getElementsByClassName('dropdown-menu-desktop')[1]
        let item = document.getElementsByClassName('span-li')[1]
        let seta = document.getElementsByClassName('seta')[1]
        menu.style.display = 'flex'
        item.style.color = 'var(--almost-black)'
        seta.src = 'images/icon-arrow-up.svg'
    }
}
function close_dropdown_desktop(item){
    if(item == 'features') {
        let menu = document.getElementsByClassName('dropdown-menu-desktop')[0]
        let item = document.getElementsByClassName('span-li')[0]
        let seta = document.getElementsByClassName('seta')[0]
        menu.style.display = 'none'
        item.style.color = 'var(--medium-gray)'
        seta.src = 'images/icon-arrow-down.svg'
    }else if(item == 'company') {
        let menu = document.getElementsByClassName('dropdown-menu-desktop')[1]
        let item = document.getElementsByClassName('span-li')[1]
        let seta = document.getElementsByClassName('seta')[1]
        menu.style.display = 'none'
        item.style.color = 'var(--medium-gray)'
        seta.src = 'images/icon-arrow-down.svg'
    }
}
function mobile_menu(action) {
    let menu = document.querySelector('#mobile-menu')
    if(action == 'open') {menu.style.display = 'flex'}else if(action == 'close') {menu.style.display = 'none'}
}

function drop_menu_mobile(item) {
    if(item == 'features') {
        let menu = document.getElementsByClassName('dropdown-menu-mobile')[0]
        let item = document.getElementsByClassName('item-dropdown')[0]
        let seta = document.getElementsByClassName('seta')[0]
        if(menu.style.display == 'flex') {
            menu.style.display = 'none'
            item.style.color = 'var(--medium-gray)'
            seta.src = 'images/icon-arrow-down.svg'
        }else{
            menu.style.display = 'flex'
            item.style.color = 'var(--almost-black)'
            seta.src = 'images/icon-arrow-up.svg'
        }
    }else if(item == 'company') {
        let menu = document.getElementsByClassName('dropdown-menu-mobile')[1]
        let item = document.getElementsByClassName('item-dropdown')[1]
        let seta = document.getElementsByClassName('seta')[1]
        if(menu.style.display == 'flex') {
            menu.style.display = 'none'
            item.style.color = 'var(--medium-gray)'
            seta.src = 'images/icon-arrow-down.svg'
        }else{
            menu.style.display = 'flex'
            item.style.color = 'var(--almost-black)'
            seta.src = 'images/icon-arrow-up.svg'
        }
    }
}