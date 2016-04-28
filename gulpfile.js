var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

gulp.task('default', function(){
  console.log('yo. use gulp watch or something');
});

gulp.task('js', function () {
    gulp.src(['src/**/*.js', 'views/**/*.js'])
      .pipe(concat('app.js'))
        .on('error', swallowError)
      .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  gulp.src('stylesheets/site.scss')
    .pipe(sass())
      .on('error', sass.logError)
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['js', 'sass'], function(){
  // Yup, build the js and sass.
});

gulp.task('watch', ['js', 'sass'], function () {
  gulp
    .watch('src/**/*.js', ['js']);
  gulp
    .watch('views/**/*.js', ['js']);
  gulp
    .watch('stylesheets/**/*.scss', ['sass']);
});

