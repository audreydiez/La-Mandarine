module.exports = function(grunt) {

    grunt.initConfig({


        less: {
            default: {
                options: {
                    compress: true
                },
                files: {
                    'css/styles.min.css': 'css/styles.less'
                }
            }
        },

        watch: {
            defaultLess: {
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['jshint', 'uglify', 'less']);

}