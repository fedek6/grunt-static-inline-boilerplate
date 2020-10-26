module.exports = function(grunt) {
  grunt.registerTask('default', ['clean:all', 'sass', 'uglify:default', 'copy:main', 'copy:dev', 'processhtml:dev', 'copy:img', 'assets_inline:all', 'connect', 'watch']);
};