export default class StickyBar {

  constructor(element) {
    if (!element) return;

    this.element = element;
    this.attachEvents();

    this.onScroll();
  }

  attachEvents() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(e) {
    if (pageYOffset > 250) {
      this.element.classList.add('is-fixed');
    } else {
      this.element.classList.remove('is-fixed');
    }
  }

}