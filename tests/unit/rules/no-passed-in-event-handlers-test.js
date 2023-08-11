"use strict";

var _ruleTestHarness = _interopRequireDefault(require("../../helpers/rule-test-harness.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _ruleTestHarness.default)({
  name: "no-passed-in-event-handlers",
  config: true,
  good: ["<Foo />", "<Foo @onClick={{this.handleClick}} />", "<Foo @onclick={{this.handleClick}} />", "<Foo @Click={{this.handleClick}} />", "<Foo @touch={{this.handleClick}} />", '<Foo @random="foo" />', "<Foo @random={{true}} />", "<Input @click={{this.handleClick}} />", "<Textarea @click={{this.handleClick}} />", "{{foo}}", "{{foo onClick=this.handleClick}}", "{{foo onclick=this.handleClick}}", "{{foo Click=this.handleClick}}", "{{foo touch=this.handleClick}}", '{{foo random="foo"}}', "{{foo random=true}}", "{{input click=this.handleClick}}", "{{textarea click=this.handleClick}}", {
    config: {
      ignore: {
        Foo: ["click"]
      }
    },
    template: "<Foo @click={{this.handleClick}} />"
  }, {
    config: {
      ignore: {
        foo: ["click"]
      }
    },
    template: "{{foo click=this.handleClick}}"
  }, {
    config: {
      ignore: {
        Foo: ["submit"]
      }
    },
    template: "<Foo @submit={{this.handleClick}} />"
  }, {
    config: {
      ignore: {
        foo: ["submit"]
      }
    },
    template: "{{foo submit=this.handleClick}}"
  }],
  bad: [{
    template: "<Foo @click={{this.handleClick}} />",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 33,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`click\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<Foo @keyPress={{this.handleClick}} />",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 36,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`keyPress\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<Foo @submit={{this.handleClick}} />",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 34,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`submit\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "{{foo click=this.handleClick}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 7,
              "endColumn": 29,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`click\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "{{foo keyPress=this.handleClick}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 7,
              "endColumn": 32,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`keyPress\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "{{foo submit=this.handleClick}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 7,
              "endColumn": 30,
              "endLine": 1,
              "line": 1,
              "message": "Event handler methods like \`submit\` should not be passed in as a component arguments",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-passed-in-event-handlers",
              "severity": 2,
            },
          ]
        `);
    }
  }]
});