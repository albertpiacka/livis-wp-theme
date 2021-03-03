import { returnDOMel } from './functions';

// Toggle menu

const toggleMenu = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.querySelector('#mobileMenu svg');
const menuItems = Array.from(document.querySelectorAll('#menu-primary li'));

let menuOpened = false;

toggleMenu.addEventListener('click', () => {
    if(menuOpened == false){
        menuOpened = true;
        mobileMenu.style.display = "block";
        mobileMenu.classList.add('fadeIn');
        mobileMenu.classList.remove('fadeOut');
    }
});

closeMenu.addEventListener('click', () => {
    if(menuOpened == true){
        menuOpened = false;
        mobileMenu.classList.remove('fadeIn');
        mobileMenu.classList.add('fadeOut');
        setTimeout(() => {
            mobileMenu.style.display = "none";
        }, 500);
    }
});

menuItems.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        if(menuOpened == true){
            menuOpened = false;

            mobileMenu.classList.remove('fadeIn');
            mobileMenu.classList.add('fadeOut');
            setTimeout(() => {
                mobileMenu.style.display = "none";
            }, 500);

            let domEl = returnDOMel(el);
            
            domEl.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    })
});