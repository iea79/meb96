$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });
	$('.fullpage').fullpage({
		//Navigation
		// menu: '#menu',
		// lockAnchors: false,
		// anchors:['firstPage', 'divany'],
		// navigation: true,
		// navigationPosition: 'right',
		// navigationTooltips: ['firstSlide', 'secondSlide'],
		// showActiveTooltip: false,
		// slidesNavigation: false,
		// slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		// scrollingSpeed: 700,
		// autoScrolling: true,
		fitToSection: true,
		// fitToSectionDelay: 1000,
		// scrollBar: false,
		// easing: 'easeInOutCubic',
		// easingcss3: 'ease',
		// loopBottom: false,
		// loopTop: false,
		// loopHorizontal: true,
		// continuousVertical: false,
		// continuousHorizontal: false,
		// scrollHorizontally: false,
		// interlockedSlides: false,
		// dragAndMove: false,
		// offsetSections: false,
		// resetSliders: false,
		// fadingEffect: false,
		// normalScrollElements: '#sofas',
		// scrollOverflow: false,
		// scrollOverflowReset: false,
		// scrollOverflowOptions: null,
		// touchSensitivity: 15,
		// normalScrollElementTouchThreshold: 5,
		// bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: false,
		animateAnchor: true,
		// recordHistory: true,

		//Design
		// controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff', '#ddd'],
		// paddingTop: '3em',
		// paddingBottom: '10px',
		// fixedElements: '#header, .footer',
		// responsiveWidth: 0,
		// responsiveHeight: 0,
		// responsiveSlides: false,
		// parallax: false,
		// parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: 'section',
		// slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

});