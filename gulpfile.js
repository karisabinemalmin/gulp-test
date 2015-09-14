/////modules

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');

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

gulp.task('useref', function() {
	var assets = useref.assets();

	return gulp.src('app/*.html')
	.pipe(assets)
	.pipe(assets.restore())
	.pipe(useref())
	.pipe(gulp.dest('dist'))
});

gulp.task('useref', function(){
	var assets = useref.assets();

	return gulp.src('app/*.html')
		.pipe(assets)
		.pipe(uglify())
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
})

///default task
gulp.task('default', ['watch'], function () {
});