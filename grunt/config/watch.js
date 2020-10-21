module.exports = {
  sass: {
    files: ['src/sass/**/*.{sass,scss,css}'],
    tasks: ['sass']
  },
  html: {
    files: ['src/index.html'],
    tasks: ['copy', 'processhtml:dev']
  },
  livereload: {
    options: { livereload: true },
    files: ['build/**/*'],
  },
};