var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('default',['sass', 'watch']);

gulp.task('sass', function () {
	gulp.src('app/scss/screen.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}))
	.pipe(gulp.dest('app/css'))
	.pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
	gulp.watch('app/scss/*.scss', ['sass']);
});