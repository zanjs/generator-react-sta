/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 zanjs Tarkus (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');

module.exports = function markdown(source) {
  this.cacheable();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); }
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); }

      return '';
    },
  });

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
