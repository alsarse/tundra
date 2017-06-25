var gulp = require ('gulp');
var concat = require ('gulp-concat');
var uglify = require ('gulp-uglify');
var nodemon = require ('nodemon');

gulp.task('bundleMod', function(){
	gulp.src('public/lib/js/*.js', {base: './'})
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('public/src/assets'));
})

gulp.task('bundlePages', function(){
	gulp.src('public/src/**/*.js',{base: './'})
	.pipe(concat('pages.js'))
	.pipe(gulp.dest('public/src/assets'));
})

gulp.task('bundleCSS', function(){
	gulp.src('public/lib/css/*.css')
	.pipe(concat('designui.css'))
	.pipe(gulp.dest('public/src/assets'));
})

gulp.task('default',['bundleMod','bundlePages', 'bundleCSS'], function () {
  nodemon({ script: 'server.js'
          , ext: 'html js css'
          })
    .on('restart', function () {
      console.log('restarted!')
    })
});
