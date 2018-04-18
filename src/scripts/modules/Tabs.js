export default class Tabs {

  constructor(element) {
    if (!element) return;

    this.element = element;
    this.buttons = Array.from(this.element.querySelectorAll('.js-tabs-button'));
    this.panes = Array.from(this.element.querySelectorAll('.js-tabs-pane'));

    this.attachEvents();
    this.buttons[0].click();
  }

  attachEvents() {
    this.buttons.forEach(button => button.addEventListener('click', this.onButtonClick.bind(this)));
  }

  onButtonClick(e) {
    e.preventDefault();

    let button = e.currentTarget;

    if (button.classList.contains('is-current')) return;

    let targetPane = this.panes.find(pane => pane.dataset.pane == button.dataset.target);

    this.panes.forEach(pane => pane.classList.remove('is-current'));
    this.buttons.forEach(button => button.classList.remove('is-current'));

    button.classList.add('is-current');
    targetPane.classList.add('is-current');
  }

}