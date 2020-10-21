module.exports = function(grunt) {
  grunt.registerTask('default', ['clean', 'sass', 'copy:main', 'copy:dev', 'processhtml:dev', 'connect', 'watch']);
};