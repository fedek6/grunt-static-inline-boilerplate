module.exports = function(grunt) {
  grunt.registerTask('dist', ['clean', 'sass', 'copy', 'processhtml:dist', 'htmlmin']);
};