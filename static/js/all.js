import "../scss/main.scss"; //Import main stylesheet to compile it.

import Topbar from "./components/topbar";
import Map from "./components/map";
import FoodMenuSlider from "./components/foodMenuSlider";
import MenuToggle from "./components/menuToggle";
import SmoothScroll from "smooth-scroll";

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Site topbar settings. Handles scroll events and menu triggers.
   * @params {String} el - class/id of site topbar.
   */
  const topbar = new Topbar("#top-bar");

  /**
   * Initialize the maps displayed in the footer.
   * @params {String} el - class/id of the map.
   */
  const googleMap = new Map("#map");

  /**
   * Initialize the Food Menu slider.
   * @params {String} el - class/id of the slider
   */
  const foodSlider = new FoodMenuSlider("#foodMenuSlider");

  /**
   * Initialize the Mobile Menu.
   * @params {String} el - class/id of the menu
   */
  const menuToggle = new MenuToggle();

  // Smooth scroll on click
  const smoothScroll = new SmoothScroll('a[href*="#"]');
});
