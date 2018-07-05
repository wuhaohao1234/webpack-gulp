const gulp = require('gulp')

const sass = require('gulp-sass')

const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const reload = browserSync.reload;

gulp.task('start',function(){
	console.log('gulp可以加载')
})
// sass转css
gulp.task('sass',function(){
	return gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'))
	.pipe(reload({ stream:true }));
})
// es6转es5
gulp.task('babel', () =>
    gulp.src('./src/es6/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js'))
);



// 监视 Sass 文件的改动，如果发生变更，运行 'sass' 任务，并且重载文件
gulp.task('serve', ['sass'], function() {
   gulp.watch('./src/sass/*.scss', ['sass']);
   gulp.watch('./src/es6/*.js', ['babel']);
});
