// Improt Modules
var gulp = require('gulp');
var url = require('url');
var fs = require('fs');
var del = require('del');
var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');

// Define Paths
var path = {
  libs: [
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/material-design-lite/material.css',
      'node_modules/material-design-lite/material.js'
    ],
  ts: 'src/app/**/*.ts',
  html: 'src/app/**/*.html',
  css: 'src/app/**/*.css',
  nots: '!src/app/**/*.ts',
  assets: 'src/app/**/*',
  index: 'src/index.html',
  dist: 'dist',
  distapp: 'dist/app',
  distlib: 'dist/lib'
};

// Clean the Contents of the Distribution Directory
gulp.task('clean', function() {
	return del(path.dist);
});

// Copy Index
gulp.task('copy:index', function() {
  return gulp.src(path.index)
    .pipe(gulp.dest(path.dist));
});

// Copy Assets
gulp.task('copy:assets', function() {
  return gulp.src([path.assets, path.nots])
    .pipe(gulp.dest(path.distapp));
});

// copy Libs
gulp.task('copy:libs', function() {
  return gulp.src(path.libs)
    .pipe(gulp.dest(path.distlib));
});

// TypeScript Transpile
gulp.task('transpile', function() {
	return gulp
		.src(path.ts)
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest(path.distapp));
});

// Build Project
gulp.task('build', sequence('clean', 'copy:index', 'copy:assets', 'copy:libs', 'transpile'));

// Default Task
gulp.task('default', sequence('build', ['serve', 'watch']));

// Serve Task
gulp.task('serve', function() {
  gulp.src(path.dist)
    .pipe(webserver({
        livereload: true,
        open: false,
        middleware: function(req, res, next) {
            var fileName = url.parse(req.url);
            fileName = fileName.href.split(fileName.search).join("");
            var fileExists = fs.existsSync(path.dist + fileName);
            if (!fileExists) {
                req.url = "/index.html";
            }
            return next();
        }
    }));
});

// Watch Task
gulp.task('watch', ['watchts', 'watchhtml', 'watchcss', 'watchindex']);

// Watch TypeScript
gulp.task('watchts', function() {
  return watch(path.ts)
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest(path.distapp));
});

// Watch Html
gulp.task('watchhtml', function() {
  return watch(path.html)
    .pipe(gulp.dest(path.distapp));
});

// Watch Index
gulp.task('watchindex', function() {
  return watch(path.index)
    .pipe(gulp.dest(path.dist));
});

// Watch CSS
gulp.task('watchcss', function() {
  return watch(path.css)
    .pipe(gulp.dest(path.distapp));
});
