class Topbar {
  constructor(element) {
    this.el = document.body.querySelector(element);
    this.scrollPos = null;
    this.contentBounds = null;
    this.elementBounds = null;
    this.ticking = false;

    if (!this.el || this.el === undefined || this.el.length === 0) return;
    this.init();
  }

  init() {
    this.contentBounds = this.getBounds(document.querySelector("#content"));
    this.elementBounds = this.el.getBoundingClientRect().height;

    this.scrollEventFn = () => {
      this.scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (!this.ticking) {
        window.requestAnimationFrame(() => this.miniTopbar());
      }
      this.ticking = true;
    };
    window.addEventListener("scroll", this.scrollEventFn);
  }

  getBounds(element) {
    return (
      element.getBoundingClientRect().y + window.scrollY || window.pageYOffset
    );
  }

  miniTopbar() {
    if (this.scrollPos >= this.contentBounds - (this.elementBounds + 40)) {
      if (!this.el.classList.contains("is-mini")) {
        this.el.classList.add("is-mini");
      }
    } else {
      if (this.el.classList.contains("is-mini")) {
        this.el.classList.remove("is-mini");
      }
    }

    this.ticking = false;
  }
}

export default Topbar;
