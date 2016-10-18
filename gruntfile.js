module.exports = function(grunt) {
 // Project configuration.
 var develop = grunt.option('prod') ? false : true;
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
     "css/style.css": "src/scss/style.scss"
    }
   }
  },
  // Post CSS task
  postcss: {
   options: {
    map: true,
    processors: [
     require("autoprefixer")({
      browsers: ["last 4 versions"]
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
       },["*.html","!index.html"]);
       // Docs
       var docs = grunt.file.expand({
         filter: "isFile",
         cwd: "src/html/docs"
       },["*.html","!index.html"]);
       // Examples
       var examples = grunt.file.expand({
         filter: "isFile",
         cwd: "src/html/examples"
       },["*.html","!index.html"]);
       var result = {
         iso_date: iso_date,
         nice_date: nice_date,
         file: file,
         page: page,
         posts: posts,
         docs: docs,
         examples: examples,
         data: data
       };
       return result;
     },
     configureEnvironment: function(env, nunjucks) {
      env.addGlobal('develop', develop);
    },
    data: grunt.file.readJSON("data.json"),
    paths: "src/html"
   },
   dev: {
    files: [{
     expand: true,
     cwd: "src/html",
     src: ["**/*.html"],
     dest: "",
     ext: ".html"
    }],
   }
  },
  // Clean task
  clean: {
    html: {
      src: ["**/*.html", "!src/**/*","!node_modules/**/*"]
    },
    css: {
      src: ["**/*.css", "**/*.css.map", "!src/**/*","!node_modules/**/*"]
    },
    all: {
      src: ["**/*.html", "!src/**/*", "**/*.css", "**/*.css.map", "!node_modules/**/*"]
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
    src: ["**/*.html", "!src/**/*.html", "!node_modules"],
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
