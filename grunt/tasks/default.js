module.exports = function(grunt) {
  grunt.registerTask('default', ['clean:all', 'sass', 'copy:main', 'copy:dev', 'processhtml:dev', 'copy:img', 'assets_inline:all', 'connect', 'watch']);
};