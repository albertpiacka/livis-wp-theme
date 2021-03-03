// Gallery lightbox

const images = Array.from(document.querySelectorAll('#pictures img'));

const lightbox = document.getElementById('lightbox');

const lightboxClose = document.querySelector('#lightbox svg');

let lightboxImg = document.querySelector('#lightbox img');

let lightboxOpened = false;

if(lightboxOpened == false){
    lightbox.style.display = "none";
}

images.forEach(img => {
    img.addEventListener('click', () => {
        if(lightboxOpened == false){
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

            lightboxOpened = true;

            lightbox.style.display = "block";
            lightbox.classList.add('fadeIn');
            lightbox.classList.remove('fadeOut');
        }
    });
});

lightboxClose.addEventListener('click', () => {
    if(lightboxOpened == true){
        lightboxOpened = false;
        lightbox.classList.remove('fadeIn');
        lightbox.classList.add('fadeOut');
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 500);
    }
});

window.addEventListener('keydown', (e) => {
    if(e.key == 'Escape' && lightboxOpened == true){
        lightboxOpened = false;
        lightbox.classList.remove('fadeIn');
        lightbox.classList.add('fadeOut');
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 500);
    }
});

// Gallery move with arrow

const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

const gallery = document.getElementById('pictures');

var offsetRight = 0;

arrowRight.addEventListener('click', () => {
    offsetRight += 10;

    gallery.style.right = `${offsetRight}em`;
});

arrowLeft.addEventListener('click', () => {
    offsetRight -= 10;

    gallery.style.right = `${offsetRight}em`;
});