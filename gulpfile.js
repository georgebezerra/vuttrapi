var gulp  = require('gulp')
var clean = require('gulp-clean')
var ts    = require('gulp-typescript')

var tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', function(){
  return tsProject.src()
                  .pipe(tsProject())
                  .js.pipe(gulp.dest('dist'))
})

gulp.task('clean', function(){
  return gulp
         .src('dist')
         .pipe(clean())
})

gulp.task('copy-opts', function(){
  return gulp.src('tests/unit/config/mocha.opts')
             .pipe(gulp.dest('dist/tests/unit/config'))
             .pipe(gulp.dest('dist/tests/integration/config'))
})

gulp.task("copy-migration-config", function() {
  return gulp.src('server/config/config.json')
             .pipe(gulp.dest('dist/server/config'))
})

gulp.task("build", function() {
  return gulp.src('server/migrations/*')
             .pipe(gulp.dest('dist/server/migrations'))
})

gulp.task('default', gulp.series('clean','compile','copy-opts','copy-migration-config','build'))

/* jshint esversion:6 */
// const gulp = require('gulp');
// const gulpTypeScript = require('gulp-typescript');
//
// const tsProject = gulpTypeScript.createProject('tsconfig.json');
//
// gulp.task('scripts', () => {
//   const tsResult = tsProject.src().pipe(tsProject());
//   return tsResult.js.pipe(gulp.dest('dist'));
// });
//
// gulp.task('watch', ['scripts'], () => {
//   gulp.watch('**/*.ts', ['scripts']);
// });
//
// gulp.task('default', ['watch']);
