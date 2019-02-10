import "../scss/main.scss"; //Import main stylesheet to compile it.

import Topbar from "./components/topbar";

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Site topbar settings. Handles scroll events and menu triggers.
   * @params {String} topbar - class/id of site topbar.
   */
  const topbar = new Topbar("#top-bar");
});
