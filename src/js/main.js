ss$(function () {
    /*
    // Применение CSS с перерисовкой слайдера
    var slider = $('.slider');
    slider.slick();
    // Измените отступы между слайдами на 20 пикселей
    slider.find('.slick-slide').css('margin', '0 20px');
    // Перерисуйте слайдер
    slider.slick('setPosition');
    */

    let sliders = [];
    sliders['promo'] = $('.js__promo-slider');
    sliders['offers'] = $('.js__offers-slider');

    if (sliders['promo'].length) {
        sliders['promo'].find('.slider').slick({
            appendArrows: $(sliders['promo'].find('.controls')),
            prevArrow: '<div class="slick-arrow slick-arrow--prev"></div>',
            nextArrow: '<div class="slick-arrow slick-arrow--next"></div>',
        });
    }
    if (sliders['offers'].length) {
        sliders['offers'].find('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $(sliders['offers'].find('.controls')),
            prevArrow: '<div class="slick-arrow slick-arrow--prev"></div>',
            nextArrow: '<div class="slick-arrow slick-arrow--next"></div>',
        });
    }
});