var parser = require('ansi-style-parser');
var default_prefix = require('./default-css-prefix');

module.exports = function(React, str, opts){
  opts = opts || {};
  var prefix = opts.prefix || default_prefix;
  return parser(str).map(function(chunk, i){
    return React.createElement('span', {
      key: i,
      className: chunk.styles.map(function(style){
        return prefix + style;
      }).join(' ')
    }, chunk.text);
  });
};
