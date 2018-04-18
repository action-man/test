export default class Gallery {

  constructor(element) {
    if (!element) return;

    this.element = element;
    this.pics = Array.from(this.element.querySelectorAll('.js-gallery__pic img'));
    this.thumbs = Array.from(this.element.querySelectorAll('.js-gallery__thumb'));

    this.attachEvents();
  }

  attachEvents() {
    this.thumbs.forEach(thumb => thumb.addEventListener('click', this.onThumbClick.bind(this)));
  }

  onThumbClick(e) {
    let thumb = e.currentTarget;

    if (thumb.classList.contains('is-current')) return;

    this.thumbs.forEach(thumb => thumb.classList.remove('is-current'));
    thumb.classList.add('is-current');

    this.switchImage(this.thumbs.indexOf(thumb));
  }

  switchImage(idx) {
    this.pics.forEach(pic => pic.classList.remove('is-current'))
    this.pics[idx].classList.add('is-current');
  }

}