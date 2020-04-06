infinite: true,	
$(function(){

	// change- bg, suptitle, svg by arrows (left+right)
	$('.header__slider').slick({
		fade:true,
		// make arrows 
		prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrowsLeft.svg" alt="" class="">',
		nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrowsRight.svg" alt="" class="">',
		// referens to dots
		asNavFor:'.slider-dotshead',
	});


	// show the correct slider by box-name
	$('.slider-dotshead').slick({
		slidesToShow:4,
		slidesToScroll:4,
		asNavFor:'.header__slider',
	});

	$('.surf-slider').slick({
		slidesToShow:4,
		slidesToScroll:1,
		prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrowsLeft.svg" alt="" class="">',
		nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrowsRight.svg" alt="" class="">',
		asNavFor:'.slider-map',
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor:'.surf-slider',
		focusOnSelect:true,
	});

	$('.travel__slider').slick({
		infinite: true,	
		fade:true,
		// make arrows 
		prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrowsLeft.svg" alt="" class="">',
		nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrowsRight.svg" alt="" class="">',
		
	});

});