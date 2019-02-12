import "../scss/main.scss"; //Import main stylesheet to compile it.

import Topbar from "./components/topbar";
import Map from "./components/map";
import FoodMenuSlider from "./components/foodMenuSlider";

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
});
