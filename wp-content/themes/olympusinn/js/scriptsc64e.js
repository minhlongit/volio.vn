jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var homeSlider = jQuery('.home-slider');
	if ( homeSlider.length ) {
		homeSlider.flexslider({
			directionNav: false,
			prevText: '',
			nextText: '',
			animation: ThemeOption.slider_effect,
			direction: ThemeOption.slider_direction,
			slideshow: Boolean(ThemeOption.slider_autoslide),
			slideshowSpeed: Number(ThemeOption.slider_speed),
			animationSpeed: Number(ThemeOption.slider_duration),
			start: function(slider) {
				slider.removeClass('loading');

				if ( jQuery(window).width() > 767 ) {
					positionSldNav();
					positionHeroBooking();
				}
			}
		});
	}

	var roomSlider = jQuery('.room-gallery');
	if ( roomSlider.length ) {
		roomSlider.flexslider({
			directionNav: false,
			prevText: '',
			nextText: ''
		});
	}

	var testimonialSlider = jQuery('.testimonials');
	if ( testimonialSlider.length ) {
		testimonialSlider.flexslider({
			directionNav: false,
			prevText: '',
			nextText: ''
		});
	}

	jQuery(window).on('resize', function() {
		if ( jQuery(window).width() > 767 ) {
			positionSldNav();
			positionHeroBooking();
		}
	});

	function positionSldNav() {
		var offset = jQuery(".slide-content").offset(),
			nav = jQuery(".home-slider").find('.flex-control-nav');

		if ( nav.length ) {
			nav.css({
				"left": offset.left
			});

			if ( nav.not(":visible") ) {
				nav.fadeIn();
			}
		}
	}

	function positionHeroBooking() {
		var offset = jQuery(".slide-content").offset(),
				booking = jQuery(".booking-hero");

		if ( booking.length ) {
			booking.css({
				"right": offset.left
			});

			if ( booking.not(":visible") ) {
				booking.fadeIn();
			}
		}
	}
});


jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Responsive Menus Init with mmenu
	 ----------------------------------------- */
	var mainNav = $("#navigation"),
		mobileNav = $("#mobilemenu");

	mainNav.clone().removeAttr('id').removeClass().appendTo(mobileNav);
	mobileNav.find('li').removeAttr('id');

	mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		}
	});

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('#navigation').superfish({
		delay:       300,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Weather Code
	 ----------------------------------------- */
	if( typeof ThemeOption.weather_woeid !== 'undefined' && ThemeOption.weather_woeid != '' ) {

		var wq = "SELECT * FROM weather.forecast WHERE woeid='" + ThemeOption.weather_woeid + "' AND u='" + ThemeOption.weather_unit + "'";
		var cb = Math.floor((new Date().getTime()) / 1200 / 1000);
		var wu = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wq) + '&format=json&_nocache=' + cb;

		window['ywcb'] = function(data) {
			var info    = data.query.results.channel.item.condition;
			var city    = data.query.results.channel.location.city;
			var country = data.query.results.channel.location.country;
			var unit    = data.query.results.channel.units.temperature;
			$('.ywicon').addClass('wi-yw-' + info['code']);
			$( '.resort-town' ).html( city );
			$( '.resort-country' ).html( country );
			$( '.resort-temperature' ).html( info.temp + '<span>' + '&deg;' + unit + '</span>' );
		};

		$.ajax({
			url: wu,
			dataType: 'jsonp',
			cache: true,
			jsonpCallback: 'ywcb'
		});
	}

	/* -----------------------------------------
	 Datepickers
	 ----------------------------------------- */
	// The datepickers must output the format yy/mm/dd otherwise PHP's checkdate() fails.
	// Makes sure arrival date is not after departure date, and vice versa.
	$( ".datepicker[name='arrive']" ).datepicker({
		showOn: 'both',
		buttonText: '<i class="fa fa-calendar"></i>',
		dateFormat: 'yy/mm/dd',
		minDate: new Date(),
		onSelect: function(dateText, dateObj){
			var minDate = new Date(dateObj.selectedYear, dateObj.selectedMonth, dateObj.selectedDay );
			minDate.setDate(minDate.getDate()+1);
			$( ".datepicker[name='depart']" ).datepicker("option", "minDate", minDate );
		}
	});

	$( ".datepicker[name='depart']" ).datepicker({
		showOn: 'both',
		buttonText: '<i class="fa fa-calendar"></i>',
		dateFormat: 'yy/mm/dd',
		minDate: new Date(),
		onSelect: function(dateText, dateObj) {
			//var maxDate = new Date(dateText);
			var maxDate = new Date(dateObj.selectedYear, dateObj.selectedMonth, dateObj.selectedDay );
			maxDate.setDate(maxDate.getDate()-1);
			$( ".datepicker[name='arrive']" ).datepicker("option", "maxDate", maxDate );
		}
	});

	/* -----------------------------------------
	 Dropkick js (custom select styling)
	 ----------------------------------------- */
	var box = $(".dk");
	box.dropkick({
		theme: 'ci'
	});

	/* -----------------------------------------
	 Responsive Videos with fitVids
	 ----------------------------------------- */
	$('body').fitVids();


	/* -----------------------------------------
	 Map Init
	 ----------------------------------------- */
	var cmap = $("#map");
	if ( cmap.length ) {
		var lat = cmap.data('lat'),
			lng = cmap.data('lng'),
			tipText = cmap.data('tooltip-txt'),
			titleText = cmap.attr('title'),
			mapid = cmap.attr('id')


		map_init(lat, lng, tipText, titleText, mapid);
	}

});


function map_init(lat, lng, tipText, titleText, map_id) {
	'use strict';
	if ( typeof google === 'object' && typeof google.maps === 'object' ) {
		var myLatlng = new google.maps.LatLng( lat, lng );
		var mapOptions = {
			zoom: 8, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map( document.getElementById( map_id ), mapOptions );

		var contentString = '<div class="tip-content">' + tipText + '</div>';

		var infowindow = new google.maps.InfoWindow( {
			content: contentString
		} );

		var marker = new google.maps.Marker( {
			position: myLatlng, map: map, title: titleText
		} );

		google.maps.event.addListener( marker, 'click', function() {
			infowindow.open( map, marker );
		} );
	}
}
