$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.first__screen').css({
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
	$('#menu a[href^="#"]').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });

    var pageScroll = true;

    $(window).bind('mousewheel', function(event) {
	    var headerTop = $('.first__screen').height();
	    	nextSection = $('#sofas').offset().top;

		if (event.originalEvent.wheelDelta >= 0) {
		    // console.log('Scroll up');
		    pageScroll = false;
		}
		else {
		    // console.log('Scroll down');
		    pageScroll = true;
	        if( $(window).scrollTop() > 0 && $(window).scrollTop() < headerTop ) {
	            $('html, body').animate({ scrollTop: nextSection }, 500);
	        }
		}
	});

    
	$('.reccomend__more').on('click', function(event) {
		event.preventDefault();
		var text = $(this).find('span');
		$(this).toggleClass('open');
		$('.reccomend__text').toggleClass('open');
		if ($(this).hasClass('open')) {
			text.html('Закрыть');
		} else {
			text.html('Читать полностью');
		}
	});

});