var dd = require('react-dd');
var jsCss = require('js-managed-css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactAnsiStyle = require('./')(React);

jsCss({
  'html, body': {
    'color': '#FFF !important',
    'background': '#000 !important',
    'font-family': 'mono'
  }
});
require('./inject-css');

ReactDOM.render(dd.createClass({
  render: function(){
    return dd.div({},
      ReactAnsiStyle('wat?\033[33m is\033[34m[34m\033[31m? \033[mend')
    );
  }
})(), document.body);
