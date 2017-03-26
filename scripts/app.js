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
})({ "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/app.js": [function (require, module, exports) {
        'use strict';

        var _modulesMobileNav = require('./modules/mobile-nav');

        var _modulesScrollToSection = require('./modules/scroll-to-section');

        var _modulesScrollToTop = require('./modules/scroll-to-top');

        var _modulesPersonalCarousel = require('./modules/personal-carousel');

        var _modulesSections = require('./modules/sections');

        var $ = window.jQuery;

        (0, _modulesMobileNav.mobileNav)();
        (0, _modulesScrollToTop.scrollToTop)();
        (0, _modulesScrollToSection.scrollToSection)($);
        (0, _modulesPersonalCarousel.personalCarousel)($);
        (0, _modulesSections.sections)();
    }, { "./modules/mobile-nav": "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/mobile-nav.js", "./modules/personal-carousel": "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/personal-carousel.js", "./modules/scroll-to-section": "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-section.js", "./modules/scroll-to-top": "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-top.js", "./modules/sections": "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/sections.js" }], "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/mobile-nav.js": [function (require, module, exports) {
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
    }, {}], "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/personal-carousel.js": [function (require, module, exports) {
        /*** Personal carousel ***/
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function personalCarousel($) {
            var carousel = document.querySelector('.personal-carousel');
            if (carousel) {
                $('.personal-carousel').slick({ autoplay: true, mobileFirst: true, arrows: false, autoplaySpeed: 5000, cssEase: 'ease-in' });
            }
        }

        exports.personalCarousel = personalCarousel;
    }, {}], "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-section.js": [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function scrollToSection($) {
            var navheight = 110;
            var buttons = Array.from(document.querySelectorAll('[data-behaviour="scrollToSection"]'));
            if (buttons.lenght < 1) return;

            function getFragmentTarget(id) {
                if (id.slice(0, 1) === '#') {
                    id = id.slice(1);
                }

                return document.getElementById(id);
            }

            function getNavHeight() {}

            buttons.forEach(function (btn, i) {
                btn.addEventListener('click', function (evt) {
                    var target = getFragmentTarget(this.hash);
                    if (!target) return;

                    evt.preventDefault();
                    var targetHeight = $(target).offset().top - navheight;
                    console.log(targetHeight);

                    $('html, body').animate({ scrollTop: targetHeight }, 1000, function () {
                        //update browser location
                        window.location.hash = target.id;
                    });
                });
            });
        };

        exports.scrollToSection = scrollToSection;
    }, {}], "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/scroll-to-top.js": [function (require, module, exports) {
        /*** Scroll to top ***/
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function scrollToTop() {
            var SCROLL_TO_TOP = document.querySelector('#scroll-to-top');

            if (SCROLL_TO_TOP) {
                var markup = '<svg class="ak-icon scroll-to-top__icon"><use xlink:href="/wp-content/plugins/wp-svg-spritemap-master/defs.svg#:scroll-top"></svg>\n        {<span class="scroll-to-top__copy"> Back to Top </span>}';
                SCROLL_TO_TOP.innerHTML = markup;
            }
        }

        exports.scrollToTop = scrollToTop;
    }, {}], "/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/modules/sections.js": [function (require, module, exports) {
        /*** Personal carousel ***/

        /** selectors: 
        	main item: '.section'
        	inner items: '.section-${id}`',
        	//example: section-what-we-do
        	styles: .section-inner
        **/

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        function sections() {
            var sections = Array.from(document.querySelectorAll('.section'));
            sections.forEach(function (section) {
                var id = section.id;
                var innerSections = undefined;
                if (id) {
                    //check for inner sections
                    innerSections = Array.from(document.querySelectorAll('.section-' + id));
                }

                var waypoint = new Waypoint({
                    element: section,
                    handler: function handler() {
                        this.element.classList.add('section--is-visable');
                        //show inner section
                        if (innerSections.length > 0) {
                            innerSections.forEach(function (inner) {
                                inner.classList.add('section--is-visable');
                            });
                        }
                    },
                    offset: '50%'
                });
            });
        }

        exports.sections = sections;
    }, {}] }, {}, ["/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/app.js"]);