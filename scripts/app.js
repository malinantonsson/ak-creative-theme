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

        console.log('hello');

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
    }, {}] }, {}, ["/Users/malinantonsson/Dev/projects/mamp/ak-creative/wp-content/themes/vantage-child/src/scripts/app.js"]);