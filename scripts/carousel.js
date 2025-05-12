const carouselTrack = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

btnLeft.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: 300, behavior: 'smooth' });
});
