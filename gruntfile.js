module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  // Sass task
  sass: {
   interior: {
    options: {
     style: "compressed",
     sourcemap: "inline",
     precision: 4
    },
    files: {
     "build/css/style.css": "src/scss/style.scss",
     "build/css/demo/style.css": "src/scss/demo/style.scss"
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
    src: "build/css/**/*.css"
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
    files: ["build/**/*.css"],
    tasks: "postcss",
    options: {
     spawn: false,
     livereload: true
    }
   },
   html: {
    files: ["src/**/*.html", "src/**/*.nunjucks"],
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
     dest: "build/",
     ext: ".html"
    }],
   }
  },
  // Clean task
  clean: {
    html: {
      src: ["build/**/*.html"]
    },
    css: {
      src: ["build/css/**/*.css"]
    },
    all: {
      src: ["build/*"]
    }
  },
  // Prettify task
  prettify: {
   options: {
    "indent": 1,
    "indent_char": " ",
    "indent_scripts": "normal",
    "wrap_line_length": 250,
    "brace_style": "collapse",
    "preserve_newlines": true,
    "max_preserve_newlines": 2,
    "unformatted": ["a", "code", "pre"]
   },
   all: {
    expand: true,
    cwd: "",
    src: ["build/**/*.html"],
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
