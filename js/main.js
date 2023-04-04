const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
    //Delete sliner, not first
    if (index !== 0) slide.classList.add('hidden') 
    //Add index
    slide.dataset.index = index;
    //Add Добавляем data атрибут для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');
    //Click to sliders
    slide.addEventListener('click', function () {
        showNextSlide('next');
    });
});

btnNext.onclick = function () {
    console.log('Next slide');
    showNextSlide('next');
};

btnPrev.onclick = function () {
    console.log('Prev slide');
    showNextSlide('prev');
};

function showNextSlide(direction) {
    //скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index; 
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //расчитываки слел индекм в заыистмости от напрвыоения движения
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    // Показываем след слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}