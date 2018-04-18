export default class Catalog {

  constructor(element) {
    if (!element) return;

    this.element = element;
    this.body = document.body;
    this.toggles = Array.from(document.querySelectorAll('.js-catalog-toggle'));
    this.overlay = document.querySelector('.js-catalog-overlay');


    // initial state
    this.isOpen = false;

    this.attachEvents();
  }

  attachEvents() {
    this.toggles.forEach(toggle => toggle.addEventListener('click', this.onToggleClick.bind(this)));
    this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
  }

  onToggleClick(e) {
    e.preventDefault();

    this.toggleCatalog();
  }

  onOverlayClick(e) {
    this.isOpen && this.toggleCatalog();
  }

  toggleCatalog() {
    if (this.isOpen) {
      this.body.classList.remove('is-catalog-open');
    }	else {
      this.body.classList.add('is-catalog-open');
    }
  
    this.isOpen = !this.isOpen;
  }

}