module.exports = {
  main: {
    expand: true, 
    flatten: true, 
    cwd: 'src/',
    src: ['*'], 
    dest: 'build/', 
    filter: 'isFile'
  },
  img: {
    expand: true, 
    flatten: false, 
    cwd: 'src/',
    src: ['img/**'], 
    dest: 'build/', 
  },
  dev: {
    expand: true, 
    flatten: false, 
    src: ['src/sass/**'], 
    dest: 'build/', 
  }
};