import Flickity from "flickity";

Flickity.prototype._createResizeClass = function() {
  this.element.classList.add("flickity-resize");
};

Flickity.createMethods.push("_createResizeClass");

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove("flickity-resize");
  resize.call(this);
  this.element.classList.add("flickity-resize");
};

class FoodMenuSlider {
  constructor(element) {
    this.el = document.body.querySelector(element);

    if (!this.el || typeof this.el === undefined || this.el.length === 0)
      return;
    this.init();
  }

  init() {
    const flkty = new Flickity(this.el, {
      cellAlign: "left",
      groupCells: 2,
      freeScroll: true,
      pageDots: false
    });
  }
}

export default FoodMenuSlider;
