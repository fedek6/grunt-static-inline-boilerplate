module.exports = {
  options: {
    // Task-specific options go here.
  },
  dev: {
    options: {
      data: {
        message: 'This is development environment',
        cssVariant: 'main.css'
      }
    },
    files: {
      'build/index.html': ['build/index.html']
    }
  },
  dist: {
    options: {
      process: true,
      data: {
        message: 'This is production distribution',
        cssVariant: 'main.min.css'
      }
    },
    files: {
      'build/index.html': ['build/index.html']
    }
  },
};