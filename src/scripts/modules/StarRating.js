export default class StarRating {

  constructor(element) {
    if (!element) return;

    this.element = element;
    this.fieldset = this.element.querySelector('.js-rating__fieldset');

    // request details
    this.requestMethod = this.element.getAttribute('method');
    this.requestURL = this.element.getAttribute('action');

    this.attachEvents();
  }

  attachEvents() {
    this.element.addEventListener('change', this.onChange.bind(this));
    this.fieldset.addEventListener('mouseenter', e => e.target.classList.add('is-hovered'));
    this.fieldset.addEventListener('mouseleave', e => e.target.classList.remove('is-hovered'));
  }

  onChange(e) {
    let data = new FormData(this.element);
    let request = new XMLHttpRequest();
  
    request.open(this.requestMethod, this.requestURL, true);
    request.responseType = 'json';
  
    request.onload = function(e) {
      if (this.status == 200) {
  
        // Success
  
      } else {
  
        // Error
  
      }
    };
  
    request.send(data);
  
  
    // turn off the stars
    this.fieldset.disabled = true;
  }

}