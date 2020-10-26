module.exports = {
  all: {
    options: {
      inlineImg: true,
      inlineSvg: true,
      inlineLinkTags: true,
      includeTag: "?assets-inline",
    },
    files: {
      "build/index.html": "build/index.html",
    },
  },
};
