import { returnDOMel } from './functions';

// Header menu

const menu = Array.from(document.querySelectorAll('#menu-primary-1 li'));

menu[0].classList.add('selected');

menu.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        
        menu.forEach(el => {
            el.classList.remove('selected');
        })

        element.classList.add('selected');

        let domEl = returnDOMel(element);
        
        domEl.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })
});
