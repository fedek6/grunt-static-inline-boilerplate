module.exports = {
  default: {
    options: {
      beautify: true
    },
    files: {
      'build/js/main.js': ['src/js/main.js']
    }
  },
  dist: {
    options: {
      compress: true
    },
    files: {
      'build/js/main.js': ['src/js/main.js']
    }
  }
};