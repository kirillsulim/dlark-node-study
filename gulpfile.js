var gulp = require('gulp');

gulp.task('build-dev', function() {
  var files = [
    "mocha/mocha.js",
    "mocha/mocha.css",
    "chai/chai.js",
    "jquery/dist/jquery.min.js",
  ];

  for(file in files) {
    file = files[file];
    dir = file.substring(0, file.indexOf("/"));
    gulp.src("./node_modules/" + file)
      .pipe(gulp.dest("./public/vendor/" + dir));
  }
});

gulp.task('default', [
  "build-dev",
]);
