/*** Scroll to top ***/
function scrollToTop () {
    const SCROLL_TO_TOP = document.querySelector('#scroll-to-top');

    if(SCROLL_TO_TOP) {
        let markup = `<svg class="ak-icon scroll-to-top__icon"><use xlink:href="/wp-content/plugins/wp-svg-spritemap-master/defs.svg#:scroll-top"></svg>
        {<span class="scroll-to-top__copy"> Back to Top </span>}`;
        SCROLL_TO_TOP.innerHTML = markup;
    }
}

export { scrollToTop };