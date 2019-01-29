'use strict';

define("toy-robot/tests/integration/components/application-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | application', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "g+6NF+pv",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"application\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+LdyDQ6v",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"application\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/components/board-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | board', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "916O9N6z",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"board\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ODy5RKui",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"board\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/components/board/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | board', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "916O9N6z",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"board\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ODy5RKui",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"board\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/components/game-board-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | game-board', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "iwewjatt",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"game-board\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yurJiRHj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"game-board\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/components/game-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | game', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VjJSwtIv",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"game\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DlnjRVaL",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"game\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/components/test/board-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | test/board', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eZHqxR8C",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"test/board\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PRS1HW3C",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"test/board\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/integration/pods/components/game/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | game', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VjJSwtIv",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"game\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DlnjRVaL",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"game\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("toy-robot/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/game-board.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/game-board.js should pass ESLint\n\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n12:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n25:9 - \'space\' is assigned a value but never used. (no-unused-vars)\n33:7 - \'$\' is not defined. (no-undef)\n33:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n49:5 - \'$\' is not defined. (no-undef)\n49:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n63:5 - \'$\' is not defined. (no-undef)\n63:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n73:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n73:5 - \'$\' is not defined. (no-undef)\n84:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n84:5 - \'$\' is not defined. (no-undef)\n95:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n95:5 - \'$\' is not defined. (no-undef)\n101:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n101:5 - \'$\' is not defined. (no-undef)\n165:9 - Unexpected console statement. (no-console)\n167:9 - Unexpected console statement. (no-console)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/game.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/game.js should pass ESLint\n\n');
  });
});
define("toy-robot/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('toy-robot/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'toy-robot/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('toy-robot/templates/components/game-board.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'toy-robot/templates/components/game-board.hbs should pass TemplateLint.\n\ntoy-robot/templates/components/game-board.hbs\n  4:6  error  Incorrect indentation for `<div>` beginning at L4:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  7:6  error  Incorrect indentation for `<button>` beginning at L7:C6. Expected `<button>` to be at an indentation of 4 but was found at 6.  block-indentation\n  8:6  error  Incorrect indentation for `<div>` beginning at L8:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n');
  });
  QUnit.test('toy-robot/templates/game.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'toy-robot/templates/game.hbs should pass TemplateLint.\n\n');
  });
});
define("toy-robot/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/board-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/board-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/board/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/board/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/game-board-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-board-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/test/board-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/test/board-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/game/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/game/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/game/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/game/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/game-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("toy-robot/tests/test-helper", ["toy-robot/app", "toy-robot/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("toy-robot/tests/unit/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("toy-robot/tests/unit/pods/game/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | game', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:game');
      assert.ok(route);
    });
  });
});
define("toy-robot/tests/unit/routes/game-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | game', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:game');
      assert.ok(route);
    });
  });
});
define("toy-robot/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('toy-robot/config/environment', [], function() {
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

require('toy-robot/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
