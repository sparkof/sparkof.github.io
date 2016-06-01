var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/css/'))
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('index.html', ['html']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'html', 'sass', 'watch']);
