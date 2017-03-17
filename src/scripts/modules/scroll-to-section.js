function scrollToSection($) { 
  const buttons = Array.from(document.querySelectorAll('[data-behaviour="scrollToSection"]'));
  if (buttons.lenght < 1) return;

  function getFragmentTarget(id) {
    if(id.slice(0, 1) === '#') {
      id = id.slice(1);
    }

    return document.getElementById(id);
  }
  

  buttons.forEach( function(btn, i) {
    btn.addEventListener('click', function(evt) {
      let target = getFragmentTarget(this.hash);
      if(!target) return;

      evt.preventDefault();

      $('html, body').animate(
        { scrollTop: $(target).offset().top },
        1000, function() {
          //update browser location
          window.location.hash = target.id;
        });
    });
  });


};

export { scrollToSection };