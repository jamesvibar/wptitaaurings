import "../scss/main.scss"; //Import main stylesheet to compile it.

import Topbar from "./components/topbar";
import Map from "./components/map";

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Site topbar settings. Handles scroll events and menu triggers.
   * @params {String} topbar - class/id of site topbar.
   */
  const topbar = new Topbar("#top-bar");

  /**
   * Initialize the maps displayed in the footer.
   * @params {String} map - class/id of the map.
   */
  const googleMap = new Map("#map");
});
