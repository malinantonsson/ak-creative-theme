"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/app.js": [function (require, module, exports) {
        'use strict';

        var _modulesMobileNav = require('./modules/mobile-nav');

        var _modulesScrollToSection = require('./modules/scroll-to-section');

        var _modulesScrollToTop = require('./modules/scroll-to-top');

        (0, _modulesMobileNav.mobileNav)();
        (0, _modulesScrollToTop.scrollToTop)();
        (0, _modulesScrollToSection.scrollToSection)();
    }, { "./modules/mobile-nav": "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/mobile-nav.js", "./modules/scroll-to-section": "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-section.js", "./modules/scroll-to-top": "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-top.js" }], "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/mobile-nav.js": [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function mobileNav() {
            // cache the dom elements
            var ak_MENU_BTN = document.querySelector('a.mobilenav-main-link');
            var ak_MOBILE_NAV_WRAPPER = '.mobile-nav-frame';
            var ak_MOBILE_NAV = document.querySelector(ak_MOBILE_NAV_WRAPPER);

            var closebtn;
            var SHOW_MOBILE_NAV_CLASS = 'ak_mobile_nav--open';

            function ak_closeNav() {
                ak_MOBILE_NAV.classList.remove(SHOW_MOBILE_NAV_CLASS);
            };

            function ak_getCloseBtn(ctx) {
                //get the close btn
                closebtn = ctx.querySelector('.close');
                closebtn.addEventListener('click', ak_closeNav);
            };

            function ak_openNav() {
                //check if nav wrapper has been created
                if (!ak_MOBILE_NAV) {
                    (function () {
                        if (ak_nav_timeout) clearInteral(ak_nav_timeout);

                        //keep checking for nav wrapper
                        var ak_nav_timeout = window.setInterval(function () {
                            ak_MOBILE_NAV = document.querySelector(ak_MOBILE_NAV_WRAPPER);

                            if (ak_MOBILE_NAV) {
                                //when you got it, stop the interval
                                clearInterval(ak_nav_timeout);
                                ak_MOBILE_NAV.classList.add(SHOW_MOBILE_NAV_CLASS);

                                //add closebtn if it hasnt been added yet
                                if (!closebtn) {
                                    ak_getCloseBtn(ak_MOBILE_NAV);
                                }
                            }
                        }, 100);
                    })();
                } else {
                    ak_MOBILE_NAV.classList.add(SHOW_MOBILE_NAV_CLASS);

                    //add closebtn if it hasnt been added yet
                    if (!closebtn) {
                        ak_getCloseBtn(ak_MOBILE_NAV);
                    }
                }
            }

            ak_MENU_BTN.addEventListener('click', ak_openNav);
        }

        exports.mobileNav = mobileNav;
    }, {}], "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-section.js": [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
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

            var body = document.body;
            var animateTime = 900;

            var targetOffset = undefined;

            var buttons = document.querySelectorAll('[data-behaviour="scrollToSection"]');
            if (buttons) {
                buttons = Array.from(buttons);
                buttons.forEach(function (button, index) {

                    button.addEventListener('click', function (evt) {
                        targetOffset = document.getElementById(evt.target.hash.substr(1)).offsetTop;
                        var currentPosition = getPageScroll();

                        body.classList.add('in-transition');
                        body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
                        body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
                        body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

                        window.setTimeout(function () {
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

        exports.scrollToSection = scrollToSection;
    }, {}], "/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-top.js": [function (require, module, exports) {
        /*** Scroll to top ***/
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function scrollToTop() {
            var SCROLL_TO_TOP = document.querySelector('#scroll-to-top');

            if (SCROLL_TO_TOP) {
                var markup = '<span class="scroll-to-top__icon">Icon</span>\n        {<span class="scroll-to-top__copy"> Back to Top </span>}';
                SCROLL_TO_TOP.innerHTML = markup;
            }
        }

        exports.scrollToTop = scrollToTop;
    }, {}] }, {}, ["/Users/mantonsson/Dev/tutorials/wordpress/tutorial/wp-content/themes/vantage-child/src/scripts/app.js"]);