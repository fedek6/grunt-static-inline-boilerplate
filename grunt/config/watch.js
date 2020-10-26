module.exports = {
  sass: {
    files: ['src/sass/**/*.{sass,scss,css}'],
    tasks: ['sass']
  },
  html: {
    files: ['src/index.html'],
    tasks: ['copy', 'processhtml:dev']
  },
  js: {
    files: ['src/js/*.js'],
    tasks: ['uglify:default']
  },
  livereload: {
    options: { livereload: true },
    files: ['build/**/*'],
  },
};