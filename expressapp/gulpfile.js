// Dependency declaration
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump'),
    babelify = require('babelify'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass');

// --------------------- Development tasks

// Js linter
gulp.task('linter', function(){
  return gulp.src('components/scripts/*.js')
    .pipe(eslint({
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'double', { "allowTemplateLiterals": true }],
            'space-before-function-paren': 'off',
            'no-unused-vars': 'off'
        },
        parserOptions: {
            'ecmaVersion': 6
        },
        globals: [
            'jQuery',
            '$'
        ],
        envs: [
            'browser'
        ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Browserify and watchify task
gulp.task('watchJs', function() {
  var b = browserify({
    entries: ['components/scripts/main.js'],
    cache: {},
    packageCache: {}
  }).transform('babelify', {presets: ['env']});

  b.on('update', rebundle);

  function rebundle() {
    return b.bundle()
      .pipe(source('script.js'))
      .pipe(gulp.dest('public/javascripts'))
  }
  return rebundle();
});

// Scss task
gulp.task('sass', function () {
  return gulp.src('components/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'))
});

// --------------------- Watch tasks
gulp.task('watch', function() {
  gulp.watch(['components/scripts/*.js'], ['linter']);
  gulp.watch(['components/scripts/*.js'], ['watchJs']);
  gulp.watch(['components/scss/*.scss'], ['sass']);
});

// Watch task for js linter and scss compilation
gulp.task('default', ['watch']);


