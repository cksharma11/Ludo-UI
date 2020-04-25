function css() {
  return 'styled-jsx style';
}

css.global = function global() {
  return 'global css';
};

css.resolve = function resolve() {
  return {
    className: 'resolve-classname',
    styles: 'resolve-styles'
  };
};

module.exports = css;
