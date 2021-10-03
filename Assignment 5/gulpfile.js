var {src, dest, watch,task} = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');

// var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

exports.default = function() {
    watch('src/*.scss', css);
}

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  task('styles', function () {
    return gulp.src('./src/styles.scss')
      // Compile SASS files
      .pipe(sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.'],
        onError: console.error.bind(console, 'Sass error:')
      }))
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./dist/css'))
  });