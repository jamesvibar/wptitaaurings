// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Ananda.woff2":[["Ananda.4fbbbb31.woff2","../fonts/Ananda.woff2"],"../fonts/Ananda.woff2"],"./..\\fonts\\Ananda.woff":[["Ananda.7f655bf3.woff","../fonts/Ananda.woff"],"../fonts/Ananda.woff"],"./..\\fonts\\AnandaBlack.woff2":[["AnandaBlack.95bd6907.woff2","../fonts/AnandaBlack.woff2"],"../fonts/AnandaBlack.woff2"],"./..\\fonts\\AnandaBlack.woff":[["AnandaBlack.b2b4dd98.woff","../fonts/AnandaBlack.woff"],"../fonts/AnandaBlack.woff"],"./..\\fonts\\Gotham-Bold.woff2":[["Gotham-Bold.81379964.woff2","../fonts/Gotham-Bold.woff2"],"../fonts/Gotham-Bold.woff2"],"./..\\fonts\\Gotham-Bold.woff":[["Gotham-Bold.7f7e1605.woff","../fonts/Gotham-Bold.woff"],"../fonts/Gotham-Bold.woff"],"./..\\fonts\\Gotham-Book.woff2":[["Gotham-Book.e9f96037.woff2","../fonts/Gotham-Book.woff2"],"../fonts/Gotham-Book.woff2"],"./..\\fonts\\Gotham-Book.woff":[["Gotham-Book.9316bc27.woff","../fonts/Gotham-Book.woff"],"../fonts/Gotham-Book.woff"],"./..\\fonts\\Gotham-Medium.woff2":[["Gotham-Medium.dcdfe38f.woff2","../fonts/Gotham-Medium.woff2"],"../fonts/Gotham-Medium.woff2"],"./..\\fonts\\Gotham-Medium.woff":[["Gotham-Medium.b074dd9f.woff","../fonts/Gotham-Medium.woff"],"../fonts/Gotham-Medium.woff"],"./..\\fonts\\Gotham-Thin.woff2":[["Gotham-Thin.644b52b8.woff2","../fonts/Gotham-Thin.woff2"],"../fonts/Gotham-Thin.woff2"],"./..\\fonts\\Gotham-Thin.woff":[["Gotham-Thin.cb57ce42.woff","../fonts/Gotham-Thin.woff"],"../fonts/Gotham-Thin.woff"],"./..\\fonts\\fa-solid-900.eot":[["fa-solid-900.2aa7f73c.eot","../fonts/fa-solid-900.eot"],"../fonts/fa-solid-900.eot"],"./..\\fonts\\fa-solid-900.woff2":[["fa-solid-900.50052ebc.woff2","../fonts/fa-solid-900.woff2"],"../fonts/fa-solid-900.woff2"],"./..\\fonts\\fa-solid-900.woff":[["fa-solid-900.9e5696f5.woff","../fonts/fa-solid-900.woff"],"../fonts/fa-solid-900.woff"],"./..\\fonts\\fa-solid-900.ttf":[["fa-solid-900.16dc6129.ttf","../fonts/fa-solid-900.ttf"],"../fonts/fa-solid-900.ttf"],"./..\\fonts\\fa-solid-900.svg":[["fa-solid-900.ab242033.svg","../fonts/fa-solid-900.svg"],"../fonts/fa-solid-900.svg"],"./..\\fonts\\fa-brands-400.eot":[["fa-brands-400.5a0cf9bb.eot","../fonts/fa-brands-400.eot"],"../fonts/fa-brands-400.eot"],"./..\\fonts\\fa-brands-400.woff2":[["fa-brands-400.0443b8c8.woff2","../fonts/fa-brands-400.woff2"],"../fonts/fa-brands-400.woff2"],"./..\\fonts\\fa-brands-400.woff":[["fa-brands-400.f5430110.woff","../fonts/fa-brands-400.woff"],"../fonts/fa-brands-400.woff"],"./..\\fonts\\fa-brands-400.ttf":[["fa-brands-400.ab00d996.ttf","../fonts/fa-brands-400.ttf"],"../fonts/fa-brands-400.ttf"],"./..\\fonts\\fa-brands-400.svg":[["fa-brands-400.c3b99f20.svg","../fonts/fa-brands-400.svg"],"../fonts/fa-brands-400.svg"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/topbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Topbar =
/*#__PURE__*/
function () {
  function Topbar(element) {
    _classCallCheck(this, Topbar);

    this.el = document.querySelector(element);
    this.scrollPos = null;
    this.contentBounds = null;
    this.elementBounds = null;
    this.ticking = false;
    if (!this.el || this.el === undefined || this.el.length === 0) return;
    this.init();
  }

  _createClass(Topbar, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.contentBounds = this.getBounds(document.querySelector("#content"));
      this.elementBounds = this.el.getBoundingClientRect().height;

      this.scrollEventFn = function () {
        _this.scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (!_this.ticking) {
          window.requestAnimationFrame(function () {
            return _this.miniTopbar();
          });
        }

        _this.ticking = true;
      };

      window.addEventListener("scroll", this.scrollEventFn);
    }
  }, {
    key: "getBounds",
    value: function getBounds(element) {
      return element.getBoundingClientRect().y + window.scrollY || window.pageYOffset;
    }
  }, {
    key: "miniTopbar",
    value: function miniTopbar() {
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
  }]);

  return Topbar;
}();

var _default = Topbar;
exports.default = _default;
},{}],"../../node_modules/google-maps/lib/Google.js":[function(require,module,exports) {
var define;
(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.31';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		if (GoogleMapsLoader.VERSION) {
			url += '&v=' + GoogleMapsLoader.VERSION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});

},{}],"components/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _googleMaps = _interopRequireDefault(require("google-maps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map =
/*#__PURE__*/
function () {
  function Map(el) {
    _classCallCheck(this, Map);

    this.el = document.querySelector(el);
    this.location = {
      lat: 14.3862621,
      lng: 120.8813928
    };
    this.key = "AIzaSyCa78isn_mmKpCYexVYgp2_ODCgjJ5nkn4"; //TODO: UNRESTRICTED (Secure API Key before production)

    if (!this.el || this.el === undefined || this.el.length === 0) return;
    this.init();
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      var _this = this;

      _googleMaps.default.KEY = this.key;

      _googleMaps.default.load(function (google) {
        var map = new google.maps.Map(_this.el, {
          zoom: 15,
          center: _this.location,
          disableDefaultUI: true
        });
        new google.maps.Marker({
          position: _this.location,
          map: map,
          title: "Tita Auring's - The Queen of Chicken Wings"
        });
      });
    }
  }]);

  return Map;
}();

var _default = Map;
exports.default = _default;
},{"google-maps":"../../node_modules/google-maps/lib/Google.js"}],"all.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

var _topbar = _interopRequireDefault(require("./components/topbar"));

var _map = _interopRequireDefault(require("./components/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import main stylesheet to compile it.
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Site topbar settings. Handles scroll events and menu triggers.
   * @params {String} topbar - class/id of site topbar.
   */
  var topbar = new _topbar.default("#top-bar");
  /**
   * Initialize the maps displayed in the footer.
   * @params {String} map - class/id of the map.
   */

  var googleMap = new _map.default("#map");
});
},{"../scss/main.scss":"../scss/main.scss","./components/topbar":"components/topbar.js","./components/map":"components/map.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58218" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","all.js"], null)
//# sourceMappingURL=/all.map