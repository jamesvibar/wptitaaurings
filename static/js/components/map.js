import GoogleMapsLoader from "google-maps";

class Map {
  constructor(el) {
    this.el = document.querySelector(el);
    this.location = { lat: 14.3862621, lng: 120.8813928 };
    this.key = "AIzaSyCa78isn_mmKpCYexVYgp2_ODCgjJ5nkn4"; //TODO: UNRESTRICTED (Secure API Key before production)

    if (!this.el || this.el === undefined || this.el.length === 0) return;
    this.init();
  }

  init() {
    GoogleMapsLoader.KEY = this.key;
    GoogleMapsLoader.load(google => {
      const map = new google.maps.Map(this.el, {
        zoom: 15,
        center: this.location,
        disableDefaultUI: true
      });
      new google.maps.Marker({
        position: this.location,
        map: map,
        title: "Tita Auring's - The Queen of Chicken Wings"
      });
    });
  }
}

export default Map;
