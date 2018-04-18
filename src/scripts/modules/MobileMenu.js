export default class MobileMenu {
  
  constructor() {
    this.body = document.body;
    this.burger = document.querySelector('.js-burger');
    this.nav = document.querySelector('.js-nav');
    this.overlay = document.querySelector('.js-nav-overlay');

    // initial state
    this.isOpen = false;

    this.attachEvents();
  }

  attachEvents() {
    this.burger.addEventListener('click', this.onBurgerClick.bind(this));
    this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
  }

  onBurgerClick(e) {
    e.preventDefault();

    this.toggleMenu();
  }

  onOverlayClick(e) {
    this.isOpen && this.toggleMenu();
  }

  toggleMenu() {
    if (this.isOpen) {
      this.body.classList.remove('is-menu-open');
    }	else {
      this.body.classList.add('is-menu-open');
    }
  
    this.isOpen = !this.isOpen;
  }

}