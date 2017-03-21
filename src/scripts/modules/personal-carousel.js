/*** Personal carousel ***/
function personalCarousel ($) {
	const carousel = document.querySelector('.personal-carousel');
	if(carousel) {
		$('.personal-carousel').slick({autoplay : true, mobileFirst: true, arrows : false});
	}
}

export { personalCarousel };