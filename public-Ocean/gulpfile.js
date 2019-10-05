var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
 
// 压缩html
gulp.task('minify-html', function() {
    return gulp.src(['./public/*.html', './public/**/*.html', './public/**/**/*.html'])
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src(['./public/js/**/*.js', '!./public/js/**/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 默认任务
gulp.task('default', gulp.parallel('minify-html','minify-css','minify-js'));