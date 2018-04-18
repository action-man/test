'use strict';

const gulp =         require('gulp');
const sourcemaps =   require('gulp-sourcemaps');
const sass =         require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano =      require('gulp-cssnano');
const pug =          require('gulp-pug');
const browserSync =  require('browser-sync').create();
const seq =          require('run-sequence');
const del =          require('del');
const plumber =      require('gulp-plumber');
const gulpIf =       require('gulp-if');
const notify =       require('gulp-notify');
const svgSprite =    require('gulp-svg-sprite');
const rename =       require('gulp-rename');
const webpack =      require('webpack');
const gulpWebpack =  require('webpack-stream');
const named =        require('vinyl-named');



const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';



const onError = notify.onError({
  message: "<%= error.message %>",
  sound: false
});



gulp.task('styles', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(sass({ includePaths: ['node_modules'] }))
    .pipe(autoprefixer())
    .pipe(gulpIf(!isDev, cssnano()))
    .pipe(rename({ suffix: '.bundle' }))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(gulp.dest('dist/styles'));
});


gulp.task('scripts', () => {
  return gulp.src('src/scripts/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(named())
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('dist/scripts'));
});


gulp.task('sprite', () => {
  return gulp.src('src/sprite/**/*.svg')
    .pipe(plumber({errorHandler: onError}))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '',
          sprite: 'sprite/sprite.symbol.svg',
          dimensions: true
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('images', () => {
  return gulp.src('src/images/**/*.*', { base: 'src' })
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest('dist'));
});


gulp.task('templates', () => {
  return gulp.src('src/templates/*.pug')
    .pipe(plumber({errorHandler: onError}))
    .pipe(pug({ pretty: true }))   
    .pipe(gulp.dest('dist'));
});


gulp.task('serve', () => {
  browserSync.init({
    server: 'dist',
    notify: false,
    ghostMode: false
  });
});



gulp.task('clean', () =>  del('dist'));



gulp.task('build', ['clean'], (callback) => {
  seq('styles', 'scripts', 'images', 'sprite', 'templates', callback);
});



gulp.task('default', (callback) => {
  seq('build', 'serve', callback);

  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/images/**/*.*', ['images']);
  gulp.watch('src/sprite/**/*.svg', ['sprite']);
  gulp.watch('src/templates/**/*.pug', ['templates']);
});