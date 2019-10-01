const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const cssnano = require('cssnano');
const postcssFunctions = require('postcss-functions');
const path = require('path');

module.exports = function (grunt) {
  const development = !grunt.option('prod');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      linked: {
        options: {
          map: true,
          processors: [
            postcssImport(),
            postcssFunctions({
              functions: {
                grad: (gradVal) => {
                  const gradient = `linear-gradient(var(--interior-orange) 1px, transparent 1px) 0 ${gradVal}/100vw`;
                  return gradient;
                },
                calcColumnWidth: (columnWidth) => {
                  const placeholder = `calc((var(--test-column-width) * ${columnWidth}) + (var(--gutter-x) * ${columnWidth - 1}))`;
                  return placeholder;
                },
                calcRowHeight: (rowHeight) => {
                  const placeholder = `calc((var(--row-height) * ${rowHeight}) + (var(--gutter-y) * ${rowHeight - 1}))`;
                  return placeholder;
                },
              },
            }),
            postcssMixins(),
            postcssPresetEnv({
              stage: 0,
              autoprefixer: {
                grid: false,
              },
              features: {
                'custom-properties': false,
              },
              importFrom: 'src/css/layout/breakpoints.css',
            }),
          ],
        },
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: 'interior.css',
          dest: 'docs/css',
        }],
      },
      embedded: {
        options: {
          processors: [
            cssnano({
            }),
          ],
        },
        files: [
          {
            src: 'docs/css/interior.css',
            dest: 'src/embedded-css/interior.css',
          },
        ],
      },
    },

    watch: {
      css: {
        files: [
          'src/css/**/*.css',
          'src/blocks/**/*.css',
          'src/embedded-css/*.css',
        ],
        tasks: 'postcss:linked',
        options: {
          spawn: false,
          livereload: true,
        },
      },
      html: {
        files: ['src/**/*.html', 'src/**/*.njk'],
        tasks: ['clean:html', 'nunjucks', 'prettify'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      gruntfile: {
        files: 'gruntfile.js',
        options: {
          spawn: false,
          livereload: true,
          reload: true,
        },
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['clean:js', 'copy:js'],
        options: {
          spawn: false,
          livereload: true,
          reload: true,
        },
      },
    },

    nunjucks: {
      options: {
        preprocessData(data) {
          const date = new Date();
          const iso_date = date.toISOString();
          const nice_date = date.toDateString();
          const file = path.basename(this.src[0]);
          const page = path.basename(this.src[0], '.html');

          const posts = grunt.file.expand({
            filter: 'isFile',
            cwd: 'src/html/posts',
          }, ['*.html', '!index.html']);

          const pages = grunt.file.expand({
            filter: 'isFile',
            cwd: 'src/html/pages',
          }, ['*.html', '!index.html']);

          const examples = grunt.file.expand({
            filter: 'isFile',
            cwd: 'src/html/examples',
          }, ['*.html', '!index.html']);

          const screens = grunt.file.readJSON('screens.json');
          const result = {
            iso_date,
            nice_date,
            file,
            page,
            posts,
            examples,
            data,
            screens,
            pages,
          };
          return result;
        },
        configureEnvironment(env) {
          env.addGlobal('development', development);
        },
        data: grunt.file.readJSON('data.json'),
        paths: 'src',
        noCache: false, // Flag to speed up nunjucks compilation
      },
      all: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['html/**/*.html'],
          dest: 'docs/',
          // Rename src, removing the html/ directory, which is for authoring purposes.
          // More info here: https://gruntjs.com/configuring-tasks#the-rename-property
          rename: (dest, src) => dest + src.replace('html', ''),
          ext: '.html',
        }],
      },
    },

    copy: {
      js: {
        files: [{
          cwd: 'src/',
          expand: true,
          src: '**/*.js',
          dest: 'docs/',
        }],
      },
    },

    clean: {
      all: {
        src: ['docs/**/*', '!docs/**/CNAME', '!docs/images', '!docs/**/images/**/*'],
      },
      html: {
        src: ['docs/**/*.html'],
      },
      css: {
        src: ['docs/css/**/*'],
      },
      js: {
        src: ['docs/js/**/*'],
      },
    },

    prettify: {
      options: {
        indent: 1,
        indent_char: ' ',
        indent_inner_html:
          (function () {
            if (development) {
              return false;
            }
            return true;
          }()),
        preserveBOM: false,
        condense: true,
        max_preserve_newlines: 2,
        unformatted: ['style', 'svg', 'a', 'code', 'pre'],
      },
      all: {
        expand: true,
        cwd: 'docs/',
        src: ['**/*.html'],
        dest: 'docs/',
        ext: '.html',
      },
    },
  });

  // Load the plugins to run your tasks
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies',
  });
  require('time-grunt')(grunt);

  // Default task(s).
  grunt.registerTask('default', [
    'clean:all',
    'postcss',
    'nunjucks',
    'prettify',
    'copy',
    'watch',
  ]);
};
