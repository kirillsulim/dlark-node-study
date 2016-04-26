var gulp = require('gulp');
var jshint = require('gulp-jshint');
var reporter = require('jshint-stylish');

gulp.task('vendor-assets', function() {
  var files = [
    "mocha/mocha.js",
    "mocha/mocha.css",
    "chai/chai.js",
    "jquery/dist/jquery.min.js",
  ];

  for(var file in files) {
    file = files[file];
    var dir = file.substring(0, file.indexOf("/"));
    gulp.src("./node_modules/" + file)
      .pipe(gulp.dest("./public/vendor/" + dir));
  }
});

gulp.task('tests', function() {
  gulp.src("./test/*.js")
    .pipe(gulp.dest("./public/test"));
});

gulp.task('lint', function() {
  gulp.src([
    "./*.js",
    "./lib/**/*.js",
    "./src/**/*.js",
    "./test/**/*.js",
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(reporter));
});

gulp.task('default', [
  "lint",
  "vendor-assets",
  "tests",
]);
