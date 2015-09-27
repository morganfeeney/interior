module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto',
                    precision: 4
                },
                files: {
                    'css/style.css': 'scss/style.scss'
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
            dist: {
                src: 'css/*.css'
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
            js: {
                files: ['**/*.js','!**/node_modules/**'],
                tasks: 'watch',
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            php: {
                files: ['**/*.php'],
                tasks: 'watch',
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
        php2html: {
            default:{
                options: {
                    processLinks: true,
                    htmlhint: {
                      'doctype-first' : false
                    }
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: '*.php',
                    dest: '',
                    ext: '.html' 
                }]                
            },
        },
        prettify: {
            options: {
                "indent": 4,
                "indent_char": " ",
                "indent_scripts": "normal",
                "wrap_line_length": 0,
                "brace_style": "collapse",
                "preserve_newlines": true,
                "max_preserve_newlines": 1,
                "unformatted": [
                    "a",
                    "code",
                    "pre"
                ]
            },
            all: {
                expand: true,
                cwd: '',
                src: ['*.html'],
                dest: '',
                ext: '.html'
            }
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
    grunt.registerTask('demo', [
        'php2html',
        'prettify'
    ]);
};
