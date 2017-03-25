import { mobileNav } from './modules/mobile-nav';
import { scrollToSection } from './modules/scroll-to-section';
import { scrollToTop } from './modules/scroll-to-top';
import { personalCarousel } from './modules/personal-carousel';
import { sections } from './modules/sections';

const $ = window.jQuery;


mobileNav();
scrollToTop();
scrollToSection($);
personalCarousel($);
sections();
