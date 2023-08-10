// no-whitespace-for-layout-test.js

import generateRuleTests from "../../helpers/rule-test-harness.js";

generateRuleTests({
  name: "no-whitespace-for-layout",
  config: true,

  good: [
    "Start to finish",
    "Start&nbsp;to&nbsp;finish",
    "Start<br>to<br>finish",
    "<div>\n  example\n</div>",
    '<div\n  foo="bar"\n  baz="qux"\n>\n  example\n</div>',
  ],

  bad: [
    {
      template: "START  FINISH",

      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 14,
              "endLine": 1,
              "line": 1,
              "message": "Excess whitespace detected.",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-whitespace-for-layout",
              "severity": 2,
            },
          ]
        `);
      },
    },
    {
      template: "START&nbsp;&nbsp;FINISH",
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 24,
              "endLine": 1,
              "line": 1,
              "message": "Excess whitespace detected.",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-whitespace-for-layout",
              "severity": 2,
            },
          ]
        `);
      },
    },
    {
      template: "START&nbsp; FINISH",
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 19,
              "endLine": 1,
              "line": 1,
              "message": "Excess whitespace detected.",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-whitespace-for-layout",
              "severity": 2,
            },
          ]
        `);
      },
    },
    {
      template: "START &nbsp;FINISH",
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 19,
              "endLine": 1,
              "line": 1,
              "message": "Excess whitespace detected.",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-whitespace-for-layout",
              "severity": 2,
            },
          ]
        `);
      },
    },
  ],
});
