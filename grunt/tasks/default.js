module.exports = function(grunt) {
  grunt.registerTask('default', ['clean', 'sass', 'copy:main', 'copy:dev', 'processhtml:dev', 'copy:img', 'assets_inline:all', 'connect', 'watch']);
};