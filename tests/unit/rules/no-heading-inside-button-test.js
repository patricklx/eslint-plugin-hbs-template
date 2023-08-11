"use strict";

var _ruleTestHarness = _interopRequireDefault(require("../../helpers/rule-test-harness.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _ruleTestHarness.default)({
  name: "no-heading-inside-button",
  config: true,
  good: ["<button>Show More</button>", "<button><span>thumbs-up emoji</span>Show More</button>", "<button><div>Show More</div></button>", "<div>Showing that it is not a button</div>", "<div><h1>Page Title in a div is fine</h1></div>", "<h1>Page Title</h1>"],
  bad: [{
    template: "<button><h1>Page Title</h1></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 28,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><h2>Heading Title</h2></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 31,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><h3>Heading Title</h3></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 31,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><h4>Heading Title</h4></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 31,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><h5>Heading Title</h5></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 31,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><div><h1>Heading Title</h1></div></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 14,
              "endColumn": 36,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<button><h6>Heading Title</h6></button>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 9,
              "endColumn": 31,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<div role="button"><h6>Heading in a div with a role of button</h6></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 20,
              "endColumn": 67,
              "endLine": 1,
              "line": 1,
              "message": "Buttons should not contain heading elements",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-heading-inside-button",
              "severity": 2,
            },
          ]
        `);
    }
  }]
});