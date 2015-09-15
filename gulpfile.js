//* modules *//

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var zip = require('gulp-zip');

//* tasks *//

gulp.task('hello', function() {
	console.log('Hello, there!')
});

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

gulp.task('useref', function() {
	var assets = useref.assets();

	return gulp.src('app/*.html')
	.pipe(assets)
	.pipe(assets.restore())
	.pipe(useref())
	.pipe(gulp.dest('dist'))
});

gulp.task('zip', function () {
	return gulp.src('**')
		.pipe(zip('this-is-the-zip.zip'))
		.pipe(gulp.dest('.'));
});

gulp.task('scss-lint', function() {
  gulp.src('app/scss/*.scss')
    .pipe(scsslint());
});

///default task
gulp.task('default', ['watch'], function () {
});
