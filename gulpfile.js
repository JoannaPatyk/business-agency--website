const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
    return gulp.src('sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    return gulp.watch('sass/**/*.scss', gulp.series(['styles']));
});
