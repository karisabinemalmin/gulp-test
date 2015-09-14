/////modules

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

/////tasks
gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
    .pipe(browserSync.reload({
    	stream: true
    }))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: '.'
		},
	})
});

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/scss/*.scss', ['sass']);	
});

gulp.task('default', ['watch'], function () {
});