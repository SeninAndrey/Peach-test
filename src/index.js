import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/main.scss';
import './styles/media.scss'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',    
     
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//tabs
const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsCities = document.querySelectorAll('.offices__cities');

tabsBtns.forEach((btnItem) => {
    btnItem.addEventListener('click',(event) => {
        tabsBtns.forEach((btnActive) => {
            btnActive.classList.remove('tabs__btn--active');
        });

        btnItem.classList.add('tabs__btn--active');

        const path = event.currentTarget.dataset.path;
        tabsCities.forEach((citiesItem) => {
            citiesItem.classList.remove('offices__cities--active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('offices__cities--active');
    });
});

// dropdown 

const body = document.querySelector('body');
const dropdownContent = document.querySelector('.dropdown__content');
const drodownBtn = document.querySelector('.dropdown__button');
const overlay = document.querySelector('.offices__overlay');

// функция переключение cтилей при открытом/закрытом dropdown 
const toggleModal = () => {
    dropdownContent.classList.toggle('dropdown__content--active');
    drodownBtn.classList.toggle('dropdown__button--active');
    body.classList.toggle('no-scroll');
    overlay.classList.toggle('offices__overlay--active');
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === overlay) { 
        toggleModal();
    }
});

drodownBtn.addEventListener('click', toggleModal);

  
