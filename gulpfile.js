const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');

gulp.task( 'sass', () => {
    gulp.src( 'scss/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gulp.dest( 'public/stylesheets' ) );
});

// gulp.task('default', ['es6', 'build']);
