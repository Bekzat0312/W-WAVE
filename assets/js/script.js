const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element,{
        searchEnabled:false,
    });
};

defaultSelect();


let tabsBtn = document.querySelectorAll('.tabs__nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__nav__btn--active')});
        e.currentTarget.classList.add('tabs__nav__btn--active');

        tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
    });
});

new Accordion('.accordion-container');

let loginBtn = document.querySelector('.header__btn');
let modal = document.querySelector('.header__modal-content');
let closeBtn = document.querySelector('.header__open-svg');
let body = document.querySelector('body');
let bgBack = document.querySelector('.header__modal-container');

loginBtn.addEventListener('click', function(){
    modal.classList.add('header__modal-content--active');
    modal.classList.add('animate__bounceIn');
    body.classList.add('overflow-hidden');
    modal.classList.remove('animate__fadeOutDownBig');
    bgBack.classList.add('active');
});

closeBtn.addEventListener('click',
    function(){
        modal.classList.remove('header__modal-content--active');
        modal.classList.add('animate__fadeOutDownBig');
        body.classList.remove('overflow-hidden');
        modal.classList.remove('animate__bounceIn');
        bgBack.classList.remove('active');
    }
)

let searchBtn = document.querySelector('.header__search-svg');
let modalSearch = document.querySelector('.header__search-open');
let closeSearch = document.querySelector('.header__search-close');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    modalSearch.classList.toggle('header__search-open--active');
    searchBtn.classList.toggle('active')
    modalSearch.classList.toggle('animate__bounceIn');
});
closeSearch.addEventListener('click', function(e){
  e.preventDefault();
  modalSearch.classList.remove('header__search-open--active');
  searchBtn.classList.remove('active')
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    freemode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });


  const validate = new window.JustValidate('#form');

  validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]);

  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
    document.querySelector('.nav__vector-1').classList.toggle("active");
    document.querySelector('.nav__vector-2').classList.toggle("active");
    document.querySelector('.header__nav-down').classList.toggle("active");
    document.querySelector('.header__list-down').classList.toggle("active");
  })

  document.querySelector('.header__player-btn-320').addEventListener('click', function(){
    document.querySelector('.header__player-btn-320').classList.toggle('active');
    document.querySelector('.header__player-1').classList.toggle("active");
    document.querySelector('.header__player-next').classList.toggle("active");
    document.querySelector('.header__block').classList.toggle("active");
  })

  document.querySelector('.podcast__btn').addEventListener('click', function(el){
    document.querySelectorAll('.podcast__articles-more').forEach(el=>{
      el.classList.remove('podcast__articles-more')});
  })
  
