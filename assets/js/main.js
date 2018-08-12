jQuery(document).ready(function($) {
	setTimeout(()=>{
		$('#preloader').addClass('hide');
	}, 2000)

	//trigger-mobile click
	$('#trigger-mobile').on('click', function(event) {
        $(this).toggleClass('active');
        $('#header-menu').toggleClass('show');
    });

    $(window).on('scroll', function(event) {
    	if ($(window).scrollTop() > 0) {
	    	$('.header-01').addClass('scrolling');
    	} else {
	    	$('.header-01').removeClass('scrolling');
    	}
    });

    $('#contact-form .input-item').click(function(event) {
    	$(this).find('.label-01').addClass('up');
    });

	var swiper1 = new Swiper('.portpolio-swiper', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		autoplay: 9000,
		autoplayDisableOnInteraction: false,
		autoplayStopOnLast : false,
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		},
		navigation: {
		nextEl: '.swiper-wrapper .swiper-slide .next',
		prevEl: '.prev',
		},
		breakpoints: {
			992: {
			  	slidesPerView: 1,
					grabCursor: false,
			}
		}
	});

	var swiper2 = new Swiper('.career-swiper', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		autoplay: 9000,
		autoplayDisableOnInteraction: false,
		autoplayStopOnLast : false,
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		},
		navigation: {
		nextEl: '.swiper-wrapper .swiper-slide .next',
		prevEl: '.prev',
		},
		breakpoints: {
			992: {
			  	slidesPerView: 1,
					grabCursor: false,
			}
		}
	});

	var swiper3 = new Swiper('.office-swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		autoplayStopOnLast : false,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		breakpoints: {
			640: {
			  	slidesPerView: 1,
			},
			992: {
			  	slidesPerView: 2,
			}
		}
	});

	$('.slide-01 .swiper-wrapper .swiper-slide .button-item').on('click', function(event) {
		event.preventDefault();
		let t = $(this).find($('.prev')).length >0 ? 1 : 0;
		if ( t == 1 ) {
			swiper1.slidePrev();
		} else {
			swiper1.slideNext();
		}
	});
});

document.addEventListener('click', function(e){
	let target = e.target;
	let inputItem = document.getElementsByClassName('input-item');
	for(var ele of inputItem){
		if (!$(ele).is(target) && $(ele).has(target).length === 0 && $(ele).find('input').val().length == 0) {
			$(ele).find('.label-01').removeClass('up');
		}
	}
});