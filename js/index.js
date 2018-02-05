$(document).ready(function() {

	// on click all items with class of colour get assigned .colour-white
	$('#mr2c4').on('click', function() {
		$('.colour').toggleClass('colour-white');
	});

  // show hidden cells on click
    // create function for toggling hide
    function showCells() {
      $('#mr4c2').toggleClass('hide');
      $('#mr4c2h1').toggleClass('hide');
      $('#mr4c2h2').toggleClass('hide');
    }

    // call functions on each tile
    $('#mr4c2').on('click', showCells);
    $('#mr4c2h1').on('click', showCells);
    $('#mr4c2h2').on('click', showCells);

  // show hidden cells on click
    // hide this and change display to flex for mr2c1h
    $('#mr2c1').on('click', function() {
      $(this).addClass('hide');
      $('#mr2c1h').css("display", "flex");
    });

    // define function for hidding mr2c1h and displaying mr2c1
    function showVerticalCells() {
      $(this).parent().attr("style", "");
      $('#mr2c1').removeClass('hide');
    }

    // on click call some function
    $('#mr2c1h1').on('click', showVerticalCells);
    $('#mr2c1h2').on('click', showVerticalCells);
  
	// on click all items with class of cell get assigned color randomly
	$('#mr3c2').on('click', function() {
		// function to list all available colours
		var colours = ['colour-red', 'colour-blue', 'colour-yellow', 'colour-white'];
		function changeColour() {
		   return colours[Math.floor(Math.random() * colours.length)];
		}

    // remove retro class from rc1
    $('#rc1').removeClass('retro');

		// remove any existing colour classes
		$('.cell').removeClass('colour-red colour-blue colour-yellow colour-red-retro colour-blue-retro colour-yellow-retro colour-white');

		// toogle random class from changeColour
		$('.cell').addClass('colour').addClass(changeColour);
	});

	// popup for videos and inline
	$('.popup').magnificPopup({
		midClick: true
	});  

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

	// image slideshow of piet mondrian's work
	$('#mr1c1').magnificPopup({
    items: [
      {
        src: './images/sliders/piet-mondrian/piet-mondrian-1.jpg'
      },
      {
        src: './images/sliders/piet-mondrian/piet-mondrian-2.jpg'
      },
      {
        src: './images/sliders/piet-mondrian/piet-mondrian-3.jpg'
      },
      {
        src: './images/sliders/piet-mondrian/piet-mondrian-4.jpg'
      },
      {
        src: './images/sliders/piet-mondrian/piet-mondrian-5.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
	});

  // on hover show link
  $('.link').hover(
    // mouse in add grey background and unhide
    function() {$(this).addClass('colour-grey').children().removeClass('hidden');},

    // mouse out remove grey background and hide
    function() {$(this).removeClass('colour-grey').children().addClass('hidden');},
  );

  // have #mr2c2 hover image replaced on mobile with click
  $('#mr2c2').on('click', function() {
    $(this).toggleClass('image-click');
  });

  // on click change all colour classes to retros
  $('#rc1').on('click', function() {
    // check to see if already has retro colours, if so, remove
    if ($(this).hasClass('retro')) {
      $('body').find('.colour-yellow-retro').removeClass('colour-yellow-retro').addClass('colour-yellow');
      $('body').find('.colour-blue-retro').removeClass('colour-blue-retro').addClass('colour-blue');
      $('body').find('.colour-red-retro').removeClass('colour-red-retro').addClass('colour-red');
      $(this).removeClass('retro');
    }

    // remove normal colour classes and add retro ones
    else {
      $(this).addClass('retro');
      $('body').find('.colour-yellow').removeClass('colour-yellow').addClass('colour-yellow-retro');
      $('body').find('.colour-blue').removeClass('colour-blue').addClass('colour-blue-retro');
      $('body').find('.colour-red').removeClass('colour-red').addClass('colour-red-retro');
    }
  });

});