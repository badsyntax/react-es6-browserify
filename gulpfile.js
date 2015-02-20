'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var connect = require('connect');
var rename = require('gulp-rename');
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var serveStatic = require('serve-static');
var config = require('./config.json');

var jsxFiles = 'app/jsx/**/*.jsx';
var vendorFiles = [
  'bower_components/react/react-with-addons.js',
  'node_modules/es6ify/node_modules/traceur/bin/traceur-runtime.js'
];
var vendorBuild = config.distPath + '/vendor';
var requireFiles = './node_modules/react/react.js';

function compileScripts(watch) {
  gutil.log('Starting browserify');

  var entryFile = './app/jsx/app.jsx';
  es6ify.traceurOverrides = {experimental: true};

  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  });
  bundler.add(entryFile);
  if (watch) {
    bundler = watchify(bundler);
  }
  bundler.require(requireFiles);
  bundler.transform(reactify);
  bundler.transform(es6ify.configure(/.jsx/));

  var rebundle = function () {
    var stream = bundler.bundle();

    stream.on('error', function (err) { console.error(err) });
    stream = stream.pipe(source(entryFile));
    stream.pipe(rename('app.js'));
    stream.pipe(gulp.dest(config.distPath+'/bundle'));
  }

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(gulp.dest(vendorBuild));
});

gulp.task('html', function () {
  return gulp.src(htmlFiles)
    .pipe(gulp.dest(config.distPath));
});

gulp.task('server', function (next) {
  connect()
  .use(serveStatic(config.distPath))
  .listen(config.serverPort, function() {
    gutil.log('Server listening on port:', config.serverPort);
    next();
  });
});

gulp.task('default', ['vendor', 'server'], function() {
  compileScripts(true);
  livereload.listen({
    port: config.livereloadPort,
    basePath: config.distPath
  });
  gulp.watch([config.distPath + '/**/*'], function (evt) {
    livereload.changed(evt.path);
  });
  gulp.watch('app/**/*.html', ['html']);
});
