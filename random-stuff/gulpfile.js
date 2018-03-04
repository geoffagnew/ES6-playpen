const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');

// var sassPaths = [
//   'bower_components/foundation-sites/scss',
//   'bower_components/motion-ui/src'
// ];

const jsSources = [
  'src/js/**/*.js'
];

// concatenate and uglify js files
// gulp.task('js-concat-ug', function(){
//   return gulp.src(jsSources)
//     .pipe(concat('scripts.min.js'))
//     .pipe(uglifyJs())
//     .pipe(gulp.dest('js'));
// });

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

// optimize images
// gulp.task('jpgs', function() {
//     return gulp.src('img/src/**/*.jpg')
//     .pipe(imagemin({ progressive: true }))
//     .pipe(gulp.dest('img/dist'));
// });

// lintjs
gulp.task('linter', function(){
  return gulp.src(jsSources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// babel transcompilation
gulp.task('js-trans', function() {
  // node source
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
  // broswer source
  gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function() {
  gulp.watch(['src/js/*.js'], ['linter']);
  gulp.watch(['src/js/*.js'], ['js-trans']);
  // gulp.watch('img/src/**/*.jpg', ['jpgs']);
  // gulp.watch('js/source/*.js', ['js-concat-ug']);
  gulp.watch(['src/scss/*.scss'], ['sass']);
});
