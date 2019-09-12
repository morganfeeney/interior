const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const cssnano = require('cssnano');
const postcssFunctions = require('postcss-functions');

module.exports = function (grunt) {
  var development = grunt.option('prod') ? false : true;

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
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
                  const placeholder = `calc((var(--column-width) * ${columnWidth}) + (var(--grid-gap) * ${columnWidth -1}))`;
                  return placeholder;
                },
                calcRowHeight: (rowHeight) => {
                  const placeholder = `calc((var(--row-height) * ${rowHeight}) + (var(--grid-row-gap) * ${rowHeight -1}))`;
                  return placeholder;
                }
              }
            }),
            postcssMixins(),
            postcssPresetEnv({
              stage: 0,
              autoprefixer: {
                grid: false,
              },
              features: {
                "custom-properties": false
              },
              importFrom: 'src/css/core/breakpoints.css'
            }),
          ],
        },
        files: [{
          expand: true,
          cwd: "src/css/",
          src: "interior.css",
          dest: "docs/css"
        }]
      },
      embedded: {
        options: {
          processors: [
            cssnano({
            })
          ],
        },
        files: [
          {
            src: "docs/css/interior.css",
            dest: "src/embedded-css/interior.css"
          },
          {
            src: "src/css/core/global-vars.css",
            dest: "src/embedded-css/global-vars.css"
          }
        ]
      },
    },

    watch: {
      css: {
        files: [
          "src/css/**/*.css",
          "src/blocks/**/*.css",
          "src/embedded-css/*.css"
        ],
        tasks: "postcss:linked",
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: ["src/**/*.html", "src/**/*.njk"],
        tasks: ["clean:html", "nunjucks", "prettify"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      gruntfile: {
        files: "gruntfile.js",
        options: {
          spawn: false,
          livereload: true,
          reload: true
        }
      },
      js: {
        files: "src/js/**/*.js",
        tasks: ["clean:js", "copy:js"],
        options: {
          spawn: false,
          livereload: true,
          reload: true
        }
      }
    },

    nunjucks: {
      options: {
        preprocessData: function (data) {
          const path = require('path');
          var date = new Date();
          var iso_date = date.toISOString();
          var nice_date = date.toDateString();
          var file = path.basename(this.src[0]);
          var page = path.basename(this.src[0], '.html');

          var posts = grunt.file.expand({
            filter: "isFile",
            cwd: "src/html/posts"
          }, ["*.html", "!index.html"]);

          var pages = grunt.file.expand({
            filter: "isFile",
            cwd: "src/html/pages"
          }, ["*.html", "!index.html"]);

          var examples = grunt.file.expand({
            filter: "isFile",
            cwd: "src/html/examples"
          }, ["*.html", "!index.html"]);

          var screens = grunt.file.readJSON("screens.json");
          var result = {
            iso_date: iso_date,
            nice_date: nice_date,
            file: file,
            page: page,
            posts: posts,
            examples: examples,
            data: data,
            screens: screens,
            pages: pages
          };
          return result;
        },
        configureEnvironment: function (env, nunjucks) {
          env.addGlobal('development', development);
        },
        data: grunt.file.readJSON("data.json"),
        paths: "src",
        noCache: false // Flag to speed up nunjucks compilation
      },
      all: {
        files: [{
          expand: true,
          cwd: "src",
          src: ["html/**/*.html"],
          dest: "docs/",
          // Rename src, removing the html/ directory, which is for authoring purposes.
          // More info here: https://gruntjs.com/configuring-tasks#the-rename-property
          rename: (dest, src) => {
            return dest + src.replace('html', '');
          },
          ext: ".html"
        }],
      }
    },

    copy: {
      js: {
        files: [{
          cwd: 'src/js/',
          expand: true,
          src: '**/*.js',
          dest: 'docs/js/'
        }]
      }
    },

    clean: {
      all: {
        src: ["docs/**/*", "!docs/**/CNAME", "!docs/images", "!docs/**/images/**/*"]
      },
      html: {
        src: ["docs/**/*.html"]
      },
      css: {
        src: ["docs/css/**/*"]
      },
      js: {
        src: ["docs/js/**/*"]
      }
    },

    prettify: {
      options: {
        "indent": 1,
        "indent_char": " ",
        "indent_inner_html":
          (function () {
            if (development) {
              return false;
            } else {
              return true;
            }
          })(),
        "preserveBOM": false,
        "condense": true,
        "max_preserve_newlines": 2,
        "unformatted": ["style", "svg", "a", "code", "pre"]
      },
      all: {
        expand: true,
        cwd: "docs/",
        src: ["**/*.html"],
        dest: "docs/",
        ext: ".html"
      }
    },
  });

  // Load the plugins to run your tasks
  require("load-grunt-tasks")(grunt, {
    scope: "devDependencies"
  });
  require("time-grunt")(grunt);

  // Default task(s).
  grunt.registerTask("default", [
    "clean:all",
    "postcss",
    "nunjucks",
    "prettify",
    "copy",
    "watch"
  ]);
};
