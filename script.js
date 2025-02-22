const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.carousel-item');
let counter = 0;
const itemWidth = items[0].offsetWidth;

nextButton.addEventListener('click', () => {
    counter++;
    if (counter >= items.length) {
        counter = 0;
    }
    carouselImages.style.transform = `translateX(-${counter * itemWidth}px)`;
});

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = items.length - 1;
    }
    carouselImages.style.transform = `translateX(-${counter * itemWidth}px)`;
});

const modalButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});