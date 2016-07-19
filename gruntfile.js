module.exports = function(grunt) {
 // Project configuration.

 grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  // Sass task
  sass: {
   interior: {
    options: {
      outputStyle: "expanded",
      sourceMapContents: true,
      sourceMap: true,
      precision: 4
    },
    files: {
     //"css/style.css": "src/scss/style.scss",
     //"css/demo/style.css": "src/scss/demo/style.scss",
     "css/layouts/style.css": "src/scss/layouts/style.scss"
    }
   }
  },
  // Post CSS task
  postcss: {
   options: {
    map: true,
    processors: [
     require("autoprefixer")({
      browsers: ["last 2 versions"]
     })
    ]
   },
   interior: {
    src: "css/**/*.css"
   }
  },
  // Watch task
  watch: {
   sass: {
    files: ["src/scss/**/*.scss"],
    tasks: "sass",
    options: {
     spawn: false,
     livereload: true
    }
   },
   css: {
    files: ["css/**/*.css"],
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
   }
  },
  // Nunjucks task
  nunjucks: {
   options: {
     preprocessData: function(data) {
       var page = require('path').basename(this.src[0], '.html');
       var layouts = grunt.file.expand({
         filter: "isFile",
         cwd: "src/html/layouts"
       },["*.html","!index.html"]);
       var result = {
         layouts: layouts,
         page: page,
         data: data
       };
       return result;
     },
    data: grunt.file.readJSON("data.json"),
    paths: "src/html"
   },
   dev: {
    files: [{
     expand: true,
     cwd: "src/html",
     src: [
      "**/*.html"
     ],
     dest: "",
     ext: ".html"
    }],
   }
  },
  // Clean task
  clean: {
    html: {
      src: ["index.html", "examples/**/*.html", "layouts/**/*.html"]
    },
    css: {
      src: ["css/**/*.css"]
    },
    all: {
      src: ["index.html", "examples/**/*.html", "layouts/**/*.html", "css/**/*.css"]
    }
  },
  // Prettify task
  prettify: {
   options: {
    "indent": 1,
    "indent_char": " ",
    "wrap_line_length": 250,
    "brace_style": "collapse",
    "preserve_newlines": true,
    "condense": true,
    "max_preserve_newlines": 2,
    "unformatted": ["a", "code", "pre"]
   },
   all: {
    expand: true,
    cwd: "",
    src: ["index.html", "examples/**/*.html", "layouts/**/*.html"],
    dest: "",
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
  "watch"
 ]);
};
