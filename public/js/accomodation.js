$(document).ready(function() {
	// $('.flexslider').flexslider({
	//   animation: "slide",
	//   controlNav: "thumbnails",
	//   touch: true,
	//   slideshow: false
	// });
	$('.flexslider').flexslider({
	  animation: "slide",
	  touch: true,
	  slideshow: true,
	  pausePlay: true
	});


	// before modal is loaded
	// need to load the picture data here
	// $('#buildingModal').on('show.bs.modal', function (event) {
	// 	var button = $(event.relatedTarget) // Button that triggered the modal
	// 	var index = button.data('cottage-index')
	// 	var modal = $(this)
	// 	modal.find('input[name="form_details"]').val(index)


	// });

	// when it is loaded
	$('#buildingModal').on('shown.bs.modal', function (event) {
		$('.flexslider').data('flexslider').resize();

	});


	// $('[data-cottage-index]').click(function() {
	// 	var index = $(this).data('cottage-index')
	// 	number = index+1;
	// 	name = 'cottage'
	// 	if (number > 5 && number < 10) {
	// 		name = 'suite'
	// 	} else if (number == 10) {
	// 		name = 'house'
	// 	}
	// 	ga('send', 'pageview', '/' + name + '-' + number);
	// 	$('.building-squares-wrapper').fadeOut(1000, function() {
	// 		console.log("in here")
	// 		$('.building-'+index).fadeIn()
	// 		$('.back-link').fadeIn()
	// 		$('.building-all-info-wrapper').fadeIn()
	// 		$('.flexslider').data('flexslider').resize();
	// 		// scrollto function for going back to top
	// 	    $('html, body').animate({
	// 	        scrollTop: $(".section.section-accomodation-buildings").offset().top - 50
	// 	    }, 1500);
	// 	});
	// })

	$('[data-cottage-single]').click(function() {
		$('.building-all-info-wrapper, .back-link').fadeOut(1000, function() {
			$('.building-squares-wrapper').fadeIn()
			$('.building-all-info').css('display', 'none')
		});
	});


});
