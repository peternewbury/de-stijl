$(document).ready(function() {

	// on click all items with class of colour get assigned .colour-white
	$('#mr2c4').on('click', function() {
		$('.colour').toggleClass('colour-white');
	});

	// on click all items with class of cell get assigned color randomly
	$('#mr3c2').on('click', function() {
		// function to list all available colours
		var colours = ['colour-red', 'colour-blue', 'colour-yellow', 'colour-white'];
		function changeColour() {
		   return colours[Math.floor(Math.random() * colours.length)];
		}

		// remove any existing colour classes, 
		$('.cell').removeClass('colour-red colour-blue colour-yellow colour-white');

		// toogle random class from changeColour
		$('.cell').addClass('colour').addClass(changeColour);
	});

	// popup for videos and inline
	$('.popup').magnificPopup({
		midClick: true
	});

	// show link on hover of box
	// check to see if using mobile device
	if ($(window).width() >= 700){	
		// on hover show link
		$('.link').hover(
			// mouse in add grey background and unhide
			function() {$(this).addClass('colour-grey').children().removeClass('hidden');},

			// mouse out remove grey background and hide
			function() {$(this).removeClass('colour-grey').children().addClass('hidden');}
		);
	}	


	// image slideshow of fashion/bulidings etc
	$('#mr2c3').magnificPopup({
    items: [
      {
        src: './images/sliders/fashion-life/buliding.jpg'
      },
      {
        src: './images/sliders/fashion-life/chair.jpg'
      },
      {
        src: './images/sliders/fashion-life/dress.jpg'
      },
      {
        src: './images/sliders/fashion-life/socks.jpg'
      },
      {
        src: './images/sliders/fashion-life/house.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
	});

	// image slideshow of music
	$('#mr4c1').magnificPopup({
    items: [
      {
        src: './images/sliders/music/white-stripes.jpg'
      },
      {
        src: './images/sliders/music/silverchair.jpg'
      },
      {
        src: './images/sliders/music/louis-andriessen.jpg'
      },
      {
        src: './images/sliders/music/nelly-van-doesberg.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
	});

});

			nelly-van-doesberg