var jsCss = require('js-managed-css');
var prefix = require('./default-css-prefix');

var styles = {
  bold: {'font-weight': 'bold'},
  dim: {'font-weight': 'lighter'},
  italic: {'font-style': 'italic'},
  underline: {'text-decoration': 'underline'},
  inverse: {'color': 'black', 'background-color': 'white'},
  hidden: {'color': 'transparent'},
  strikethrough: {'text-decoration': 'line-through'}
};

[
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray'
].forEach(function(color){
  styles[color] = {'color': color};
  styles['bg' + color[0].toUpperCase() + color.substr(1)] = {
    'background-color': color
  };
});

var prefixed_styles = {};
var key;
for(key in styles){
  if(styles.hasOwnProperty(key)){
    prefixed_styles['.' + prefix + key] = styles[key];
  }
}
jsCss(prefixed_styles);
