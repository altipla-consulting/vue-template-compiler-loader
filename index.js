
const loaderUtils = require('loader-utils');


function toFunction(code) {
  return `function(){${code}}`
}


module.exports = function(content) {
  let options = loaderUtils.getOptions(this) || {};
  let compiler = options.compiler || require('vue-template-compiler');

  let compiled = compiler.compile(content, options.compilerOptions);
  if (compiled.errors.length > 0) {
    throw compiled.errors;
  }

  return [
    'module.exports = {',
    `render: ${toFunction(compiled.render)},`,
    `staticRenderFns: [${compiled.staticRenderFns.map(toFunction).join(',')}]`,
    '};',
  ].join('');
};
