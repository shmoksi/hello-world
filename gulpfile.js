const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const templateCache = require('gulp-angular-templatecache');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
  const inject = require('gulp-inject');

const del = require('del');

gulp.task('clean', function() {
    return del(['public/*.js', 'public/*.html']);
});

gulp.task('html', function(){
    return gulp.src('client/index.html')
     .pipe(inject(
        gulp.src(['main.js', 'main-partials.js', 'main.css'], { read: false, cwd: 'public/' }), {
             relative: true,
             ignorePath: '../',
             addRootSlash: true
         }
    ))
      .pipe(gulp.dest('public/'));
});

gulp.task('partials', function(){
    return gulp.src('**/*.html', { cwd: 'client/' }).
    pipe(templateCache({
        module: 'tanks',
        standalone: false,
        moduleSystem: 'IIFE'
    })).
    pipe(rename('main-partials.js')).
    pipe(gulp.dest('public/'));
});

gulp.task('browserify', function() {
    gulp.src(['client/app.js'], { read: false })
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/'));
});

gulp.task('default', ['browserify', 'partials', 'html']);
