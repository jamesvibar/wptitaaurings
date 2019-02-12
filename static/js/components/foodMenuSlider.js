import Flickity from "flickity";

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
