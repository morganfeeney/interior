module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            interior: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto',
                    precision: 4
                },
                files: {
                    '../dist/css/interior.css': 'scss/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            interior: {
                src: '../dist/css/*.css'
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: 'sass',
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['**/*.html'],
                tasks: 'watch',
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['**/*.css'],
                tasks: 'postcss',
                options: {
                    spawn: false,
                    livereload: true
                }
            },
        },
    });

    // Load the plugins to run your tasks
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    require('time-grunt')(grunt);

    // Default task(s).
    grunt.registerTask('default', [
        'sass',
        'postcss',
        'watch'
    ]);
};
