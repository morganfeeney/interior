const sass = require('node-sass');

module.exports = function (grunt) {
  // Project configuration.
  var development = grunt.option('prod') ? false : true;
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    // Sass task
    sass: {
      linked: {
        options: {
          implementation: sass,
          outputStyle:
            (function () {
              if (development) {
                return "expanded";
              } else {
                return "compressed";
              }
            })(),
          sourceMapContents: true,
          sourceMap: true,
          precision: 7
        },
        files: [
          {
            src: "src/scss/interior.scss",
            dest: "docs/css/interior.css"
          }
        ]
      },
      embedded: {
        options: {
          implementation: sass,
          outputStyle: "compressed",
          sourceMap: false,
          precision: 7
        },
        files: [
          {
            src: "src/scss/interior.scss",
            dest: "src/html/embedded-css/interior.css"
          },
          {
            src: "src/scss/core/global-vars.scss",
            dest: "src/html/embedded-css/global-vars.css"
          }
        ]
      },
    },
    // Post CSS task
    postcss: {
      linked: {
        src: ["docs/css/**/*.css"],
        options: {
          map: true,
          processors: [
            require("autoprefixer")({
              browsers: ["last 1 versions"]
            })
          ]
        },
      },
      embedded: {
        src: ["src/html/embedded-css/*.css"],
        options: {
          processors: [
            require("autoprefixer")({
              browsers: ["last 1 versions"]
            })
          ]
        },
      },
    },
    // Watch task
    watch: {
      sass: {
        files: ["src/scss/**/*.scss", "src/scss/**/*.css"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      css: {
        files: ["docs/css/**/*.css", "src/html/embedded-css/*.css"],
        tasks: "postcss",
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
    // Nunjucks task
    nunjucks: {
      options: {
        preprocessData: function (data) {
          const path = require('path');
          var date = new Date();
          var iso_date = date.toISOString();
          var nice_date = date.toDateString();
          var file = path.basename(this.src[0]);
          var page = path.basename(this.src[0], '.html');
          // Posts
          var posts = grunt.file.expand({
            filter: "isFile",
            cwd: "src/html/posts"
          }, ["*.html", "!index.html"]);
          // Docs
          var design_system = grunt.file.expand({
            filter: "isFile",
            cwd: "src/html/design-system"
          }, ["*.html", "!index.html"]);
          // Examples
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
            design_system: design_system,
            examples: examples,
            data: data,
            screens: screens
          };
          return result;
        },
        configureEnvironment: function (env, nunjucks) {
          env.addGlobal('development', development);
        },
        data: grunt.file.readJSON("data.json"),
        paths: "src/html",
        noCache: false // Flag to speed up nunjucks compilation
      },
      all: {
        files: [{
          expand: true,
          cwd: "src/html",
          src: ["**/*.html"],
          dest: "docs/",
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
    // Clean task
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
    // Prettify task
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
    "sass",
    "postcss",
    "nunjucks",
    "prettify",
    "copy",
    "watch"
  ]);
};
