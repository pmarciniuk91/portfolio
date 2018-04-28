

/**
 * This is a controller for Works slider.
 */
class WorksSlider {

    /**
     * @constructor
     */

    constructor() {

      /**
       * Container element
       *
       * @type {HTMLElement}
       * @private
       */
      this._container;

      /**
       * All slider items.
       *
       * @type {Array<HTMLElement}
       * @private
       */
      this._workItems;

      /**
       * Next work buttons.
       *
       * @type {Array<HTMLElement}
       * @private
       */
      this._nextButton;

      /**
       * Prev work buttons.
       *
       * @type {Array<HTMLElement}
       * @private
       */
      this._prevButtons;

      /**
       * Current slide.
       *
       * @type {HTMLElement}
       * @private
       */
      this._current = 0;

      /**
       * Number of items in slider.
       *
       * @type {Number}
       * @private
       */
      this._length;

    }


    /**
     * Setup App.
     * @param {String} container The container for entire section.
     * 
     */
    init(container) {
      this._container = 
        document.querySelector(container);

      this._workItems =
        this._container.querySelectorAll(WorksSlider.CLASS.SINGLE_ITEM);

      this._length = this._workItems.length - 1;

      this._nextButtons =
        this._container.querySelectorAll(WorksSlider.CLASS.NEXT_BUTTON);

      this._prevButtons =
        this._container.querySelectorAll(WorksSlider.CLASS.PREV_BUTTON);

      this._clickNextHandlerBound =
        this._clickNextHandlerBound || this._clickNextHandler.bind(this);

      this._clickPrevHandlerBound =
        this._clickPrevHandlerBound || this._clickPrevHandler.bind(this);

      this._workItems[this._current].classList.add(WorksSlider.CLASS.SLIDE_ACTIVE);
      
      this._addEventListeners();
    }

    /**
     * Shows current slide.
     *
     * @param {Number} prev Previous slider
     */
    _changeSlide(prev) {
      requestAnimationFrame( () => {
        this._workItems[this._current].classList
                                      .add(WorksSlider.CLASS.SLIDE_ACTIVE);
      });
      requestAnimationFrame( () => {
        this._workItems[prev].classList
                             .remove(WorksSlider.CLASS.SLIDE_ACTIVE);
      });
    }

    /**
     * Handles slider functionality.
     *
     * @param {Event} e Event object.
     */
    _clickNextHandler(e) {
      e.preventDefault();
      let prev = this._current;
      

      if (this._current < this._length) {
        this._current = this._current + 1;
      } else {
        this._current = 0;
      }
      this._changeSlide(prev);
    }

    /**
     * Handles slider functionality.
     *
     * @param {Event} e Event object.
     */
    _clickPrevHandler(e) {
      e.preventDefault();
      let prev = this._current;

      if (this._current > 0) {
        this._current = this._current - 1;
      } else {
        this._current = this._length;
      }
      this._changeSlide(prev);
    }

    /**
     * Adds event listeners
     *
     */
    _addEventListeners() {
      let buttonNext;
      let buttonPrev;

      for (buttonNext of this._nextButtons) {
        buttonNext.addEventListener(
          'click',
          this._clickNextHandlerBound
        );
      };

      for (buttonPrev of this._prevButtons) {
        buttonPrev.addEventListener(
          'click',
          this._clickPrevHandlerBound
        );
      };
      
    }

  
  }

  /**
   * Classes used by this module
   * to select elements or change their style.
   *
   */

  WorksSlider.CLASS = {
    SINGLE_ITEM: '.works__item',
    NEXT_BUTTON: '.js-next-button',
    PREV_BUTTON: '.js-prev-button',
    SLIDE_ACTIVE: 'works__item--active'
  };
  
  // export default WorksSlider;

let slider = new WorksSlider();

slider.init('.works');
