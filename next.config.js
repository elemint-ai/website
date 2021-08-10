const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const withTM = require("next-transpile-modules")([
  "vfile-reporter",
  "vfile-statistics",
  "vfile-sort",
  "remark",
  "micromark-core-commonmark",
  "micromark-util-character",
  "micromark-util-chunked",
  "micromark-util-classify-character",
  "micromark-util-combine-extensions",
  "micromark-util-decode-numeric-character-reference",
  "micromark-util-encode",
  "micromark-util-html-tag-name",
  "micromark-util-normalize-identifier",
  "micromark-util-resolve-all",
  "micromark-util-sanitize-uri",
  "micromark-util-subtokenize",
  "micromark-util-symbol",
  "micromark-util-types",
  "micromark-factory-destination",
  "micromark-factory-label",
  "micromark-factory-title",
  "micromark-factory-space",
  "micromark-factory-whitespace",

  "mdast-util-to-markdown",
  "zwitch",
  "hast-util-sanitize",
]); // pass the modules you would like to see transpiled

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    [withTM, {}],
    // your other plugins here
  ],
  {
    reactStrictMode: true,
  }
);
