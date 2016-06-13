var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin');

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

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprites/sp-*.png').pipe(spritesmith({
    cssFormat: 'scss',
    imgName: 'sprite.png',
    imgPath: '../img/sprite.png',
    cssName: '_sprite.scss',
    algorithm: 'left-right'
  }));
  return spriteData.pipe(gulp.dest('src/img/sprites/'));
});

gulp.task('sprite@2x', function () {
  var spriteData = gulp.src('src/img/@2x/sprites/sp-*.png').pipe(spritesmith({
    cssFormat: 'scss',
    imgName: 'sprite@2x.png',
    imgPath: '../img/sprite@2x.png',
    cssName: '_sprite@2x.scss',
    algorithm: 'left-right'
  }));
  return spriteData.pipe(gulp.dest('src/img/@2x/'));
});

gulp.task('imagemin', () =>
	gulp.src(['src/img/sprites/sprite.png', 'src/img/*.png', 'src/img/@2x/*.png', 'src/img/*.jpg', 'src/img/@2x/*.jpg'])
		.pipe(imagemin())
		.pipe(gulp.dest('build/img'))
);

gulp.task('watch', function() {
  gulp.watch('index.html', ['html']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'html', 'sprite', 'sprite@2x', 'imagemin', 'sass', 'watch']);
