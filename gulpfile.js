const { src, dest, watch } = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps')
      autoprefixer = require('gulp-autoprefixer');

// Get arguments from command line
const getArg = (argumentName, arguments = process.argv) => {
  if (typeof argumentName !== 'string' || argumentName.length === 0) {
    throw TypeError('`argumentName` must be a non empty string');
  }

  if (typeof arguments !== 'object' || !Array.isArray(arguments)) {
    throw TypeError('`arguments` must be an array');
  }

  const serachedArgIndex = arguments.findIndex(arg => arg === argumentName);
  const searchedArg = arguments[serachedArgIndex + 1];
  if (serachedArgIndex === -1 || typeof searchedArg === 'undefined') {
    return null;
  }

  return searchedArg;
}

const getComponentName = () => {
  const componentName = getArg('-c') || getArg('--component')
  if (componentName === null) {
    throw Error(`Component name must be passed. Use: -c or --component`);
  }

  return componentName;
}

const scss = () => {
  const componentName = getComponentName();
  const componentPath = `./${componentName}`;

  return src(`${componentPath}/main.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(componentPath));
};

const watchComponent = () => {
  const componentName = getComponentName();
  const componentPath = `./${componentName}`;

  watch(`${componentPath}/**/*.scss`, scss);
};

exports.scss = scss;
exports.watch = watchComponent;
