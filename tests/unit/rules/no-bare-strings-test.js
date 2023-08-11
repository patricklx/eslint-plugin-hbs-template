"use strict";

var _ruleTestHarness = _interopRequireDefault(require("../../helpers/rule-test-harness.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _ruleTestHarness.default)({
  name: "no-bare-strings",
  config: true,
  good: ['{{t "howdy"}}', '<CustomInput @type={{"range"}} />', {
    config: [""],
    template: '\n {{translate "greeting"}}'
  }, {
    config: [","],
    template: '\n {{translate "greeting"}},'
  }, {
    config: ["foo"],
    template: "\nfoo"
  }, {
    config: ["tarzan!"],
    template: "tarzan!\t\n  tarzan!"
  }, {
    config: ["&", "&times;", "4", "3=12"],
    template: "4 &times; 3=12"
  }, {
    config: ["&", "&times;", "Tom", "Jerry"],
    template: "Tom & Jerry"
  }, {
    config: ["&", "&times;"],
    template: "& &times;"
  }, {
    config: {
      allowlist: ["howdy"]
    },
    template: "howdy"
  }, {
    config: {
      elementAttributes: {
        img: ["data-alt"]
      }
    },
    template: "<img data-alt={{bar}}>"
  }, {
    config: {
      globalAttributes: ["data-foo"]
    },
    template: "<div data-foo={{foo}}></div>"
  }, '{{t "foo"}}', '{{t "foo"}}, {{t "bar"}} ({{length}})', "(),.&+-=*/#%!?:[]{}", "&lpar;&rpar;&comma;&period;&amp;&nbsp;", "&mdash;&ndash;", "{{! template-lint-disable no-bare-strings }}", "{{! template-lint-disable }}", "<script> fdff sf sf f </script>", "<style> fdff sf sf f </style>", "<pre> fdff sf sf f </pre>", "<template> fdff sf sf f </template>", "<script> fdff sf sf <div> aaa </div> f </script>", "<style> fdff sf sf <div> aaa </div> f </style>", "<pre> fdff sf sf <div> aaa </div> f </pre>", "<template> fdff sf sf <div> aaa </div> f </template>", "<textarea> this is an input</textarea>",
  // placeholder is a <input> specific attribute
  '<div placeholder="wat?"></div>', {
    // config as array is allowlist of chars
    config: ["/", '"'],
    template: '{{t "foo"}} / "{{name}}"'
  }, {
    config: true,
    template: '\n {{translate "greeting"}},'
  }, {
    config: false,
    template: "\nfoobar"
  }, {
    config: ["₹"],
    template: "₹"
  }, {
    config: ["&#8377;"],
    template: "&#8377;"
  }, {
    // combine bare string with a variable
    config: ["X"],
    template: '<input placeholder="{{foo}}X">'
  }, "<foo-bar>\n</foo-bar>", "{{! template-lint-disable no-bare-strings}}LOL{{! template-lint-enable no-bare-strings}}", `{{!-- template-lint-disable no-bare-strings --}}
<i class="material-icons">folder_open</i>
{{!-- template-lint-enable no-bare-strings --}}`, "<div data-test-foo-bar></div>",
  // `page-title` helper.
  "{{page-title}}", '{{page-title (t "foo")}}', "{{page-title @model.foo}}", "{{page-title this.model.foo}}", '{{page-title this.model.foo " - " this.model.bar}}'],
  bad: [{
    template: '<p>{{"Hello!"}}</p>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 4,
              "endColumn": 14,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "\n howdy",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 1,
              "endColumn": 7,
              "endLine": 2,
              "line": 1,
              "message": "Non-translated string used",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: "<div>\n  1234\n</div>",
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 1,
              "endLine": 3,
              "line": 1,
              "message": "Non-translated string used",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<a title="hahaha trolol"></a>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 4,
              "endColumn": 25,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`title\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<input placeholder="trolol">',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 8,
              "endColumn": 28,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<input placeholder="{{foo}}hahaha trolol">',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 8,
              "endColumn": 41,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<Input placeholder="{{foo}}hahaha trolol" />',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 8,
              "endColumn": 41,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<Textarea placeholder="{{foo}}hahaha trolol" />',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 11,
              "endColumn": 44,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<Input @placeholder="{{foo}}hahaha trolol" />',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 8,
              "endColumn": 42,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`@placeholder\` argument",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<Textarea @placeholder="{{foo}}hahaha trolol" />',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 11,
              "endColumn": 45,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`@placeholder\` argument",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<div role="contentinfo" aria-label="Contact, Policies and Legal"></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 25,
              "endColumn": 65,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`aria-label\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<div contenteditable role="searchbox" aria-placeholder="Search for things"></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 39,
              "endColumn": 75,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`aria-placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<div role="region" aria-roledescription="slide"></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 20,
              "endColumn": 48,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`aria-roledescription\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    template: '<div role="slider" aria-valuetext="Off" tabindex="0" aria-valuemin="0" aria-valuenow="0" aria-valuemax="3"></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 20,
              "endColumn": 40,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`aria-valuetext\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    config: {
      globalAttributes: ["data-foo"]
    },
    template: '<div data-foo="derpy"></div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 22,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`data-foo\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    config: {
      elementAttributes: {
        img: ["data-alt"]
      }
    },
    template: '<img data-alt="some alternate here">',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 36,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`data-alt\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    // multiple bare strings are all logged
    template: '<div>Bady\n  <input placeholder="trolol">\n</div>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 6,
              "endColumn": 3,
              "endLine": 2,
              "line": 1,
              "message": "Non-translated string used",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
            {
              "column": 10,
              "endColumn": 30,
              "endLine": 2,
              "line": 2,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  },
  // `page-title` helper.
  {
    template: '{{page-title "foo"}}',
    result: {
      message: "Non-translated string used",
      line: 1,
      column: 13,
      source: "foo"
    }
  }, {
    template: '{{page-title "foo" " - " "bar"}}',
    results: [{
      message: "Non-translated string used",
      line: 1,
      column: 13,
      source: "foo"
    }, {
      message: "Non-translated string used",
      line: 1,
      column: 25,
      source: "bar"
    }]
  }, {
    config: {
      allowlist: ["/", '"']
    },
    template: '{{t "foo"}} / error / &lpar;"{{name}}"&rpar;',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 12,
              "endColumn": 30,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    // override the globalAttributes list, still flags violation on item from DEFAULT_CONFIG
    config: {
      globalAttributes: ["foo"]
    },
    template: '<a title="hahaha trolol"></a>',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 4,
              "endColumn": 25,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`title\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }, {
    // override the elementAttributes list, still flags violation on item from DEFAULT_CONFIG
    config: {
      elementAttributes: {
        img: ["data-alt"]
      }
    },
    template: '<input placeholder="hahaha">',
    verifyResults(results) {
      expect(results).toMatchInlineSnapshot(`
          [
            {
              "column": 8,
              "endColumn": 28,
              "endLine": 1,
              "line": 1,
              "message": "Non-translated string used in \`placeholder\` attribute",
              "nodeType": null,
              "ruleId": "ember-template-lint/no-bare-strings",
              "severity": 2,
            },
          ]
        `);
    }
  }]
});