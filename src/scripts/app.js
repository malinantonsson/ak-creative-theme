import { mobileNav } from './modules/mobile-nav';
import { scrollToSection } from './modules/scroll-to-section';
import { scrollToTop } from './modules/scroll-to-top';
import { sections } from './modules/sections';

const $ = window.jQuery;


mobileNav();
scrollToTop();
scrollToSection($);
sections();
