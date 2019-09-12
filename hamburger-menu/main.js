/**
 * Class representing Hamburger Menu.
 */
class HamburgerMenu {
  /**
   * Create Hamburger Menu.
   * @param {*} list — The element that is expanded by toggle. Element must have an ID.
   * @param {*} toggle — The element that is toggle. Element must have an ID.
   */
  constructor (list, toggle) {
    this.list = list;
    this.toggle = toggle;
    this.state = false;

    this.toggleState = this.toggleState.bind(this);
    this._showMenu = this._showMenu.bind(this);
    this._hideMenu = this._hideMenu.bind(this);

    this._setARIA();
    this._registerEvents();
  }

  /**
   * Set ARIA for list and toggle.
   * @private
   */
  _setARIA () {
    this.toggle.setAttribute('aria-label', 'Open menu');
    this.toggle.setAttribute('aria-expanded', 'false');
    this.toggle.setAttribute('aria-controls', this.list.id);

    this.list.setAttribute('aria-hidden', 'true');
    this.list.setAttribute('aria-controlledby', this.toggle.id);
  }

  /**
   * Register necessary events for menu.
   * @private
   */
  _registerEvents () {
    this.toggle.addEventListener('click', () => this.toggleState());
  }

  /**
   * Toggle menu state (hide, show).
   * @param {boolean|null} [state] — New state for menu. If not passed, will be opposite to the current one.
   */
  toggleState (state = null) {
    if (!state) {
      state = this.state ? false : true;
    }

    if (state) this._showMenu();
    else this._hideMenu();
  }

  /**
   * Show menu.
   * @private
   */
  _showMenu () {
    this.state = true;

    this.list.setAttribute('aria-hidden', 'false');
    this.list.classList.add('hamburger-menu__list--active');

    this.toggle.setAttribute('aria-label', 'Close menu');
    this.toggle.setAttribute('aria-expanded', 'true');
    this.toggle.classList.add('hamburger-menu__toggle--close');
  }

  /**
   * Hide menu.
   * @private
   */
  _hideMenu () {
    this.state= false;

    this.list.setAttribute('aria-hidden', 'true');
    this.list.classList.remove('hamburger-menu__list--active');

    this.toggle.setAttribute('aria-label', 'Open menu');
    this.toggle.setAttribute('aria-expanded', 'false');
    this.toggle.classList.remove('hamburger-menu__toggle--close');
  }
};

new HamburgerMenu(
  document.querySelector('#menuList'),
  document.querySelector('#menuToggle')
);
