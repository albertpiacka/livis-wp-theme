import { data } from "./data";
import  scss  from "../scss/main.scss";

// We declare variables

let people = data;

let container = document.createElement('div');
let body = document.querySelector('body');
let input = document.createElement('input');
let btn = document.createElement('button');

// Specifics for elements

btn.textContent = 'Reset'
container.classList.add('container');

// Body append elements

body.appendChild(container);
body.appendChild(input);
body.appendChild(btn);

// Functions

function removeKids(){
    Array.from(container.childNodes).forEach(el => {
        el.parentNode.removeChild(el);
    });
}

function reset(){
    removeKids();

    data.forEach(element => {    
        let el = document.createElement('div');
        el.classList.add('person');
        el.textContent = element.name;
        container.appendChild(el);
    });
}

// Events

let passData = function (elem, val) {

    // Create a new event
    var event = new CustomEvent('data');

    // Dispatch the event
    elem.dispatchEvent(event);

};

window.addEventListener('data', e => {
    console.log(e)
})

//Append element for each person in db 

people.forEach(element => {
    let el = document.createElement('div');
    el.classList.add('person');
    el.textContent = element.name;
    container.appendChild(el);
});

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        let filtered = 
            people.filter(n => {
                return n.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(input.value.toLowerCase());
            });
        
        removeKids();

        passData(window, filtered);
    
        filtered.forEach(element => {
            let el = document.createElement('div');

            el.classList.add('person');
        
            el.textContent = element.name;
        
            container.appendChild(el);
        })

        input.value = ''
    }
})

btn.addEventListener('click', () => {
    reset();
});

input.addEventListener('keydown', e => {
    if(e.key == 'Escape'){
        reset();
    }
})