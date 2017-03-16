/*** Scroll to top ***/
function scrollToTop () {
    const SCROLL_TO_TOP = document.querySelector('#scroll-to-top');

    if(SCROLL_TO_TOP) {
        let markup = `<span class="scroll-to-top__icon">Icon</span>
        {<span class="scroll-to-top__copy">Back to Top</span>}`;
        SCROLL_TO_TOP.innerHTML = markup;
    }
}

export { scrollToTop };