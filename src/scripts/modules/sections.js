/*** Personal carousel ***/

/** selectors: 
	main item: '.section'
	inner items: '.section-${id}`',
	//example: section-what-we-do
	styles: .section-inner
**/

function sections () {
	const sections = Array.from(document.querySelectorAll('.section'));
	sections.forEach(function(section) {
		const id = section.id;
		let innerSections;
		if(id) {
			//check for inner sections
			innerSections = Array.from(document.querySelectorAll(`.section-${id}`));
		}

		var waypoint = new Waypoint({
		  element: section,
		  handler: function() {
		  	this.element.classList.add('section--is-visable');
		  	//show inner section
		  	if(innerSections.length > 0) {
		  		innerSections.forEach(function(inner) {
		  			inner.classList.add('section--is-visable');
		  		});
		  	}
		  },
	  	  offset: '50%' 
		});
	});
}

export { sections };