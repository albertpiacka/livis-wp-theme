import  scss  from "../scss/main.scss";
import { returnDOMel } from './functions';
import './menu';
import './mobileMenu';
import './lightbox';
import AOS from "aos";

AOS.init();

// Odstranime wordpressacke classy

const figures = document.querySelectorAll('figure');

figures.forEach(figure => {
    figure.className = '';
});

// Buttons 

const buttons = Array.from(document.querySelectorAll('.wp-block-button'));

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if(btn.children[0].rel){
            let domEl = document.getElementById(btn.children[0].rel);

            domEl.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    });
});


