const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const passat = document.querySelector('.passat');
const golf = document.querySelector('.golf');
const meriva = document.querySelector('.meriva');
const circle1 = document.querySelector('.img1');
const circle2 = document.querySelector('.img2');
const circle3 = document.querySelector('.img3');
const heading = document.querySelector('.header-heading');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const sliderDot1 = document.querySelector('.slider-dot1');
const sliderDot2 = document.querySelector('.slider-dot2');
const sliderDot3 = document.querySelector('.slider-dot3');


let counter = 0;

nextBtn.addEventListener('click', slidePlus);
prevBtn.addEventListener('click', slideMinus);


function slidePlus() {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    slider();
    console.log(counter)
}

function slideMinus() {
    if (counter <= 0) return;
    counter--;
    slider();
    console.log(counter)
}



function slider() {
    switch(counter) {
        case 0:
            // golf.style.display = 'inline-block';
            // passat.style.display = 'none';
            // meriva.style.display = 'none';
            golf.style.visibility = 'visible';
            passat.style.visibility = 'hidden';
            meriva.style.visibility = 'hidden';

            golf.style.opacity = '1';
            passat.style.opacity = '0';
            meriva.style.opacity = '0';

            golf.style.transform = 'translate(-50%, -50%)';
            passat.style.transform = 'translate(-30%, -50%)';
            meriva.style.transform = 'translate(-30%, -50%)';

            golf.style.transition = 'all .6s';
            passat.style.transition = 'all .1s';
            meriva.style.transition = 'all .1s';

            circle1.classList.toggle('circle1');
            circle2.classList.toggle('circle2');
            circle3.classList.toggle('circle3');

            prevBtn.style.opacity = '.5';
            nextBtn.style.opacity = '1';

            heading.innerHTML = 'Volkswagen Golf V';
            sliderDot1.style.opacity = '1';
            sliderDot2.style.opacity = '.5';
            sliderDot3.style.opacity = '.5';
        break
        
        case 1:
            // golf.style.display = 'none';
            // passat.style.display = 'inline-block';
            // meriva.style.display = 'none';
            golf.style.visibility = 'hidden';
            passat.style.visibility = 'visible';
            meriva.style.visibility = 'hidden';

            golf.style.opacity = '0';
            passat.style.opacity = '1';
            meriva.style.opacity = '0';

            golf.style.transform = 'translate(-30%, -50%)';
            passat.style.transform = 'translate(-50%, -50%)';
            meriva.style.transform = 'translate(-30%, -50%)';

            golf.style.transition = 'all .1s';
            passat.style.transition = 'all .6s';
            meriva.style.transition = 'all .1s';

            circle1.classList.toggle('circle1');
            circle2.classList.toggle('circle2');
            circle3.classList.toggle('circle3');

            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';

            heading.innerHTML = 'Volkswagen Passat';

            sliderDot1.style.opacity = '.5';
            sliderDot2.style.opacity = '1';
            sliderDot3.style.opacity = '.5';
        break

        case 2:
            // golf.style.display = 'none';
            // passat.style.display = 'none';
            // meriva.style.display = 'inline-block';
            golf.style.visibility = 'hidden';
            passat.style.visibility = 'hidden';
            meriva.style.visibility = 'visible'; 

            golf.style.opacity = '0';
            passat.style.opacity = '0';
            meriva.style.opacity = '1';

            golf.style.transform = 'translate(-30%, -50%)';
            passat.style.transform = 'translate(-30%, -50%)';
            meriva.style.transform = 'translate(-50%, -50%)';

            golf.style.transition = 'all .1s';
            passat.style.transition = 'all .1s';
            meriva.style.transition = 'all .6s';

            circle1.classList.toggle('circle1');
            circle2.classList.toggle('circle2');
            circle3.classList.toggle('circle3');

            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '.5';

            heading.innerHTML = 'Opel Meriva';

            sliderDot1.style.opacity = '.5';
            sliderDot2.style.opacity = '.5';
            sliderDot3.style.opacity = '1';
        break
    }
}
