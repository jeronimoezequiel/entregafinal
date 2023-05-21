var swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoint: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
})