var _ = require('lodash');
var jsCss = require('js-managed-css');
var React = require('react');
var ReactDOM = require('react-dom');
var reactAnsiStyle = require('./');

//build up a styled string to test with
var chalk = require('chalk');
chalk.enabled = true;
var test_styles = _.without(_.keys(chalk.styles), 'reset', 'grey', 'hidden');
var ansi_string = _.map(test_styles, function(style){
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

ReactDOM.render(React.createElement('div', null,

  //////////////////////////////////
  //Here is where the magic happens
  reactAnsiStyle(React, ansi_string)

), document.body);
