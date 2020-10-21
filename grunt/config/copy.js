module.exports = {
  main: {
    expand: true, 
    flatten: true, 
    cwd: 'src/',
    src: ['*'], 
    dest: 'build/', 
    filter: 'isFile'
  },
  dev: {
    expand: true, 
    flatten: false, 
    src: ['src/sass/**'], 
    dest: 'build/', 
  }
};