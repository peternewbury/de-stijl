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

	// on click popup image slideshow of design images
	// $('#mr1c3').on('click', function() {
	// 	$.magnificPopup.open({
	// 	  items: {
	// 	    src: 'https://www.youtube.com/watch?v=UOSvUfbPHpY&autoplay=1'
	// 		  },
	// 		  type: 'video'
	// 		});
	// });

	$('#mr1c3').magnificPopup();


	// on hover show link
	$('.link').hover(
		// mouse in add grey background and unhide
		function() {$(this).addClass('colour-grey').children().removeClass('hidden');},

		// mouse out remove grey background and hide
		function() {$(this).removeClass('colour-grey').children().addClass('hidden');}
	);


	// pop-up quote on click
	$('.text').magnificPopup({
	  type:'inline',
	  midClick: true 
	});


});