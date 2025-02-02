let slideposition = 0;
const sliders = document.querySelectorAll('.slider-item');
const totalslider = sliders.length;

const btnprev = document.querySelector('#btn-prev');
const btnnext = document.querySelector('#btn-next');

btnprev.addEventListener('click', function() {
    prevSlide();
});

btnnext.addEventListener('click', function() {
    NextSlide();
});

function updateposition() {
    // Update slides
    sliders.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });

    sliders[slideposition].classList.add('active');

    // Update dots
    dots.forEach(dot => {
        dot.classList.remove('dot-active');
    });

    dots[slideposition].classList.add('dot-active');
}

function prevSlide() {
    if (slideposition === 0) {
        slideposition = totalslider - 1;
    } else {
        slideposition--;
    }
    updateposition();
}

function NextSlide() {
    if (slideposition === totalslider - 1) {
        slideposition = 0;
    } else {
        slideposition++;
    }
    updateposition();
}

const dotContainer = document.querySelector(".dots");
sliders.forEach(() => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[slideposition].classList.add('dot-active');

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        slideposition = index;
        updateposition();
    });
});

setInterval(() => {
    if (slideposition === totalslider - 1) {
        slideposition = 0;
    } else {
        slideposition++;
    }
    updateposition();
}, 5000);
