module.exports = function(grunt) {
  grunt.loadNpmTasks( 'grunt-sass' );
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jslint: {
      src: ['src/*.js']
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['jslint']
      },
      sass: {
        files: ['sassy-styles.css'],
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        loadPath: ['node_modules/foundation-sites/scss']
      },
      dist: {
        files: {
          'main.css': 'sassy-styles.scss'
        }
      }
    }
  });


  grunt.registerTask('run-linter', ['jslint']);
  grunt.registerTask('run-watcher', ['watch']);
  grunt.registerTask('run-sass', ['sass']);
  grunt.registerTask('default', ['run-linter', 'run-watcher', 'sass']);

};
