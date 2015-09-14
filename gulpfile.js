var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	console.log('Hei!');
});

gulp.task('sass', function () {
  return gulp.src('app/scss/styles.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
})