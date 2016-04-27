var _ = require('lodash');
var dd = require('react-dd');
var jsCss = require('js-managed-css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactAnsiStyle = require('./')(React);

//build up a test styled string
var chalk = require('chalk');
chalk.enabled = true;
var ansi_string = _.map(_.without(_.keys(chalk.styles), 'reset', 'grey', 'hidden'), function(style){
  return chalk[style](style);
}).join(' ');

//make this look like a terminal
jsCss({
  'html, body': {
    'color': '#DDD !important',
    'background': '#222 !important',
    'line-height': '1.5em',
    'font-family': 'mono'
  }
});
require('./inject-css');//default css styles

var div = document.createElement('DIV');
ReactDOM.render(dd.createClass({
  render: function(){
    return dd.div({},
      ReactAnsiStyle(ansi_string)
    );
  }
})(), div);
document.body.appendChild(div);
