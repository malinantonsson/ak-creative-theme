function scrollToSection() { 
  

  function getPageScroll() {
    var yScroll;
    if (window.pageYOffset) {
      yScroll = window.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
      yScroll = document.body.scrollTop;
    }
    return yScroll;
  }

  /*button.addEventListener('click', function(event) {
    targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;

    currentPosition = getPageScroll();

    body.classList.add('in-transition');

    body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
    
    window.setTimeout(function() {
      body.classList.remove('in-transition');
      body.style.cssText = "";
      window.scrollTo(0, targetOffset);
    }, animateTime);
    
    event.preventDefault();
  }, false);*/

  const body = document.body;
  const animateTime = 900;

  let targetOffset;

  let buttons = document.querySelectorAll('[data-behaviour="scrollToSection"]');
  if(buttons) {
    buttons = Array.from(buttons);
    buttons.forEach( function(button, index) {

      button.addEventListener('click', (evt) => {
        targetOffset = document.getElementById(evt.target.hash.substr(1)).offsetTop;
        let currentPosition = getPageScroll();

        body.classList.add('in-transition');
        body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
      
        window.setTimeout(function() {
          body.classList.remove('in-transition');
          body.style.cssText = "";
          window.scrollTo(0, targetOffset);
        }, animateTime);
        
        evt.preventDefault();
      }); 
    });
  }

  //button = document.getElementById('scrollButton')

};

export { scrollToSection };