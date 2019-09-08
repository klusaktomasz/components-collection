class HamburgerMenu {
  /**
   *
   * @param {*} parent
   * @param {*} toggle
   * @param {*} list
   */
  constructor (parent, toggle, list) {
    this.parent = parent;
    this.toggle = toggle;
    this.list = list;

    this._init();
  }

  /**
   *
   */
  _init () {
    this.toggle.classList.add('hamburger-menu__toggle--');
    this.toggle.setAttribute('aria-label', 'Open menu');
    this.toggle.setAttribute('aria-expanded', false);
    this.toggle.setAttribute('aria-controls', this.list.id);

    this.list.setAttribute('aria-hidden', true);
    this.list.setAttribute('aria-controlledby', this.toggle.id);
  }
};

new HamburgerMenu(
  document.querySelector('#menu'),
  document.querySelector('#menuToggle'),
  document.querySelector('#menuList')
);
