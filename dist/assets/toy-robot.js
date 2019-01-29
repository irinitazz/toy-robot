'use strict';



;define("toy-robot/app", ["exports", "toy-robot/resolver", "ember-load-initializers", "toy-robot/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("toy-robot/components/game-board", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    test: "null",
    robot: {
      coordinateX: 0,
      coordinateY: 0,
      face: 'NORTH' //N,S,W,E

    },
    model: {
      code: null,
      output: null
    },

    init() {
      this._super(...arguments);
    },

    didInsertElement() {
      this._super(...arguments);

      let space = 1;

      for (let r = 4; r >= 0; r--) {
        let col = "";

        for (let c = 0; c < 5; c++) {
          let position = c + "," + r;
          col += "<td data-pos='" + position + "'></td>";
          space++;
        }

        $(".board").append("<tr>" + col + "</tr>");
      }
    },

    clearRobot() {
      let temp = {
        coordinateX: 0,
        coordinateY: 0,
        face: 'NORTH'
      };
      this.set('model.output', null);
      this.set('robot', temp);
    },

    placeRobot() {
      let find = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
      $("td[data-pos='" + find + "']").addClass("robot");
    },

    clearScreen() {},

    moveWest(robot) {
      if (robot.coordinateX == 0 && robot.face == "WEST") {
        return false;
      }

      this.set('robot.coordinateX', --robot.coordinateX);
      let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
      $("td[data-pos='" + coordinates + "']").addClass("robot");
      return true;
    },

    moveEast(robot) {
      if (robot.coordinateX == 4 && robot.face == "EAST") {
        return false;
      }

      this.set('robot.coordinateX', ++robot.coordinateX);
      let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
      $("td[data-pos='" + coordinates + "']").addClass("robot");
      return true;
    },

    moveNorth(robot) {
      if (robot.coordinateY == 4 && robot.face == "NORTH") {
        return false;
      }

      this.set('robot.coordinateY', ++robot.coordinateY);
      let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
      $("td[data-pos='" + coordinates + "']").addClass("robot");
      return true;
    },

    moveSouth(robot) {
      if (robot.coordinateY == 0 && robot.face == "SOUTH") {
        return false;
      }

      this.set('robot.coordinateY', --robot.coordinateY);
      let coordinates = this.get('robot.coordinateX') + "," + this.get('robot.coordinateY');
      $("td[data-pos='" + coordinates + "']").addClass("robot");
      return true;
    },

    renderMovements(face) {
      let that = this;
      $("td").removeClass("robot");

      if (face == "NORTH") {
        that.moveNorth(that.get('robot'));
      } else if (face == "SOUTH") {
        that.moveSouth(that.get('robot'));
      } else if (face == "WEST") {
        that.moveWest(that.get('robot'));
      } else if (face == "EAST") {
        that.moveEast(that.get('robot'));
      }
    },

    actions: {
      parseCode(code) {
        this.clearRobot();
        let clock = ["WEST", "NORTH", "EAST", "SOUTH"];
        let splitedLines = code.split('\n'); //MUST BE PLACE Command

        let firstLine = splitedLines[0];

        if (firstLine.startsWith('PLACE')) {
          let placeCommand = firstLine.split(" ");
          let directions = placeCommand[1].split(",");
          let face = directions[2];
          this.set('robot.coordinateX', directions[0]);
          this.set('robot.coordinateY', directions[1]);
          this.set('robot.face', face);
          this.placeRobot();
          let that = this;

          for (let i = 1; i < splitedLines.length; i++) {
            //skip first line
            setTimeout(function timer() {
              if (splitedLines[i] === "MOVE") {
                // setTimeout( function timer(){
                that.renderMovements(that.get('robot.face')); // }, i*1000 );
              } else if (splitedLines[i] === "LEFT") {
                let indexOfFace = clock.findIndex(direction => direction === face);

                if (indexOfFace - 1 < 0) {
                  that.set('robot.face', clock[3]);
                } else {
                  that.set('robot.face', clock[indexOfFace - 1]);
                } // this.renderMovements(this.get('robot.face'));

              } else if (splitedLines[i] === "RIGHT") {
                let indexOfFace = clock.findIndex(direction => direction === face);

                if (indexOfFace + 1 > 3) {
                  that.set('robot.face', clock[0]);
                } else {
                  that.set('robot.face', clock[indexOfFace + 1]);
                } // this.renderMovements(this.get('robot.face'));

              } else if (splitedLines[i] === "REPORT") {
                let output = that.get('robot.coordinateX') + "," + that.get('robot.coordinateY') + "," + that.get('robot.face');
                that.set('model.output', output);
              }
            }, i * 1000);
          }

          console.log(this.get('robot'));
        } else {
          console.log("code must start with PLACE command!");
        }
      }

    }
  });

  _exports.default = _default;
});
;define("toy-robot/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("toy-robot/helpers/app-version", ["exports", "toy-robot/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("toy-robot/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("toy-robot/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("toy-robot/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "toy-robot/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("toy-robot/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("toy-robot/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("toy-robot/initializers/export-application-global", ["exports", "toy-robot/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("toy-robot/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("toy-robot/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("toy-robot/router", ["exports", "toy-robot/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('game', {
      path: '/game'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("toy-robot/routes/game", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("toy-robot/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("toy-robot/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MR/vmWyO",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[11,\"class\",\"main-text\"],[9],[0,\"Toy Robot App\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "toy-robot/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("toy-robot/templates/components/game-board", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Oo2Fg4IJ",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"column\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"code-section\"],[9],[0,\"\\n        \"],[1,[27,\"textarea\",null,[[\"rows\",\"value\",\"placeholder\"],[15,[23,[\"model\",\"code\"]],\"codes comes here...\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"run-button\"],[9],[0,\"Run\"],[3,\"action\",[[22,0,[]],\"parseCode\",[23,[\"model\",\"code\"]]]],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"output-section\"],[9],[0,\"\\n        \"],[1,[27,\"textarea\",null,[[\"rows\",\"value\"],[5,[23,[\"model\",\"output\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"column\"],[9],[0,\"\\n    \"],[7,\"table\"],[11,\"class\",\"board\"],[9],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"column\"],[9],[0,\"type your code\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"column\"],[9],[0,\"robot\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "toy-robot/templates/components/game-board.hbs"
    }
  });

  _exports.default = _default;
});
;define("toy-robot/templates/game", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3h4t36ew",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"game-board\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "toy-robot/templates/game.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('toy-robot/config/environment', [], function() {
  var prefix = 'toy-robot';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("toy-robot/app")["default"].create({"name":"toy-robot","version":"0.0.0+10f9110c"});
          }
        
//# sourceMappingURL=toy-robot.map
