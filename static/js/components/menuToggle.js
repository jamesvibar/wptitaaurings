import { TimelineLite, Power3, TweenLite } from "gsap";

class MenuToggle {
  constructor() {
    this.menu = document.body.querySelector("#menu-mobile");
    this.button = document.body.querySelector("#hamburger");

    if (!this.menu || typeof this.menu === undefined || this.menu.length === 0)
      return;
    this.init();
  }

  init() {
    this.button.addEventListener("click", this.toggleButton.bind(this));
  }

  toggleButton() {
    const tNav = new TimelineLite({ paused: true });

    if (!this.menu.classList.contains("is-active")) {
      this.menu.classList.add("is-active");
      this.button.classList.add("is-active");
      TweenLite.set(this.menu, { display: "flex" });
      tNav
        .add("start")
        .to(
          this.menu,
          0.5,
          {
            autoAlpha: 1,
            ease: Power3.easeInOut
          },
          "start"
        )
        .play();
    } else {
      this.menu.classList.remove("is-active");
      this.button.classList.remove("is-active");
      new TimelineLite({
        paused: true,
        onComplete: () => {
          TweenLite.set(this.menu, { display: "none" });
        }
      })
        .add("start")
        .to(this.menu, 0.5, { autoAlpha: 0, ease: Power3.easeInOut })
        .play();
    }
  }
}

export default MenuToggle;
