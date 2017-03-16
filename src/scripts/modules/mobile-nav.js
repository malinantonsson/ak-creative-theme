function mobileNav() {
    // cache the dom elements
    const ak_MENU_BTN = document.querySelector('a.mobilenav-main-link');
    const ak_MOBILE_NAV_WRAPPER = '.mobile-nav-frame';
    let ak_MOBILE_NAV = document.querySelector(ak_MOBILE_NAV_WRAPPER);
    
    var closebtn;
    const SHOW_MOBILE_NAV_CLASS = 'ak_mobile_nav--open';

    function ak_closeNav() {
        ak_MOBILE_NAV.classList.remove(SHOW_MOBILE_NAV_CLASS);
    };


    function ak_getCloseBtn(ctx) {
        //get the close btn
        closebtn = ctx.querySelector('.close');
        closebtn.addEventListener('click', ak_closeNav);
    };

    function ak_openNav () {
        //check if nav wrapper has been created
        if(!ak_MOBILE_NAV) {
            if (ak_nav_timeout) clearInteral(ak_nav_timeout);

            //keep checking for nav wrapper
            let ak_nav_timeout = window.setInterval(function() {
                ak_MOBILE_NAV = document.querySelector(ak_MOBILE_NAV_WRAPPER);

                if(ak_MOBILE_NAV) {
                    //when you got it, stop the interval
                    clearInterval(ak_nav_timeout);
                    ak_MOBILE_NAV.classList.add(SHOW_MOBILE_NAV_CLASS);

                    //add closebtn if it hasnt been added yet
                    if(!closebtn) {
                        ak_getCloseBtn(ak_MOBILE_NAV);
                    }
                }
            }, 100); 
        } else {
            ak_MOBILE_NAV.classList.add(SHOW_MOBILE_NAV_CLASS);

            //add closebtn if it hasnt been added yet
            if(!closebtn) {
                ak_getCloseBtn(ak_MOBILE_NAV);
            }
        } 
    }

    ak_MENU_BTN.addEventListener('click', ak_openNav);
}


export { mobileNav };