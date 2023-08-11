"use strict";

var _ruleTestHarness = _interopRequireDefault(require("../../helpers/rule-test-harness.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _ruleTestHarness.default)({
  name: "inline-link-to",
  config: true,
  good: ["{{#link-to 'routeName' prop}}Link text{{/link-to}}", "{{#link-to 'routeName'}}Link text{{/link-to}}"],
  bad: [{
    template: "{{link-to 'Link text' 'routeName'}}",
    fixedTemplate: "{{#link-to 'routeName'}}Link text{{/link-to}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 0,
              "endColumn": 35,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": true,
              "line": 1,
              "message": "The inline form of link-to is not allowed. Use the block form instead.",
              "rule": "inline-link-to",
              "severity": 2,
              "source": "{{link-to 'Link text' 'routeName'}}",
            },
          ]
        `);
    }
  }, {
    template: "{{link-to 'Link text' 'routeName' one two}}",
    fixedTemplate: "{{#link-to 'routeName' one two}}Link text{{/link-to}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 0,
              "endColumn": 43,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": true,
              "line": 1,
              "message": "The inline form of link-to is not allowed. Use the block form instead.",
              "rule": "inline-link-to",
              "severity": 2,
              "source": "{{link-to 'Link text' 'routeName' one two}}",
            },
          ]
        `);
    }
  }, {
    template: "{{link-to (concat 'Hello' @username) 'routeName' one two}}",
    fixedTemplate: "{{#link-to 'routeName' one two}}{{concat 'Hello' @username}}{{/link-to}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 0,
              "endColumn": 58,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": true,
              "line": 1,
              "message": "The inline form of link-to is not allowed. Use the block form instead.",
              "rule": "inline-link-to",
              "severity": 2,
              "source": "{{link-to (concat 'Hello' @username) 'routeName' one two}}",
            },
          ]
        `);
    }
  }, {
    template: "{{link-to 1234 'routeName' one two}}",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 37,
              "endLine": 1,
              "line": 1,
              "message": "The inline form of link-to is not allowed. Use the block form instead.",
              "nodeType": null,
              "ruleId": "ember-template-lint/inline-link-to",
              "severity": 2,
            },
          ]
        `);
    }
  }]
});