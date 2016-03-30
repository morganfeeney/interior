module.exports = function(grunt) {
// Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
// Sass task
  sass: {
   demo: {
    options: {
     style: 'expanded',
     sourcemap: 'auto',
     precision: 4
    },
    files: {
     'css/style.css': 'scss/demo.scss'
    }
   }
  },
// Post CSS task
  postcss: {
   options: {
    map: true,
    processors: [
     require('autoprefixer')({
      browsers: ['last 2 versions']
     })
    ]
   },
   demo: {
    src: 'css/*.css'
   }
  },
// Watch task
  watch: {
   sass: {
    files: ['**/*.scss', '../**/*.scss'],
    tasks: 'sass',
    options: {
     spawn: false,
     livereload: true
    }
   },
   js: {
    files: ['**/*.js', '!**/node_modules/**'],
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
   html: {
    files: ['demo/**/*.html', 'demo/**/*.nunjucks'],
    tasks: 'nunjucks',
    options: {
     spawn: false,
     livereload: true
    }
   },
  },
// Nunjucks task
  nunjucks: {
   options: {
    data: grunt.file.readJSON('data.json'),
    paths: 'demo'
   },
   dev: {
    files: [{
     expand: true,
     cwd: 'demo/',
     src: [
      'templates/**/*.html',
      'partials/**/*.html'
     ],
     dest: 'build/',
     ext: '.html'
    }],
   }
  },
  prettify: {
   options: {
    "indent": 1,
    "indent_char": " ",
    "indent_scripts": "normal",
    "wrap_line_length": 0,
    "brace_style": "collapse",
    "preserve_newlines": true,
    "max_preserve_newlines": 2,
    "unformatted": [
     "a",
     "code",
     "pre"
    ]
   },
   all: {
    expand: true,
    cwd: '',
    src: ['**/*.html'],
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
  'nunjucks',
  'postcss',
  'watch'
 ]);
};
