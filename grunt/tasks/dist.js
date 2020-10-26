module.exports = function(grunt) {
  grunt.registerTask('dist', ['clean:all', 'sass', 'uglify:dist', 'copy', 'processhtml:dist', 'copy:img', 'assets_inline:all', 'htmlmin', 'clean:dist']);
};