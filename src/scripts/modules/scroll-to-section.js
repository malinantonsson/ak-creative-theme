function scrollToSection($) { 
  const navheight = 110;
  const buttons = Array.from(document.querySelectorAll('[data-behaviour="scrollToSection"]'));
  if (buttons.lenght < 1) return;

  function getFragmentTarget(id) {
    if(id.slice(0, 1) === '#') {
      id = id.slice(1);
    }

    return document.getElementById(id);
  }

  function getNavHeight() {

  }
  

  buttons.forEach( function(btn, i) {
    btn.addEventListener('click', function(evt) {
      let target = getFragmentTarget(this.hash);
      if(!target) return;

      evt.preventDefault();
      let targetHeight = $(target).offset().top - navheight;
      console.log(targetHeight);

      $('html, body').animate(
        { scrollTop: targetHeight },
        1000, function() {
          //update browser location
          window.location.hash = target.id;
        });
    });
  });


};

export { scrollToSection };