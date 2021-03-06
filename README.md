# react-ansi-style

[![build status](https://secure.travis-ci.org/smallhelm/react-ansi-style.png)](https://travis-ci.org/smallhelm/react-ansi-style)
[![dependency status](https://david-dm.org/smallhelm/react-ansi-style.svg)](https://david-dm.org/smallhelm/react-ansi-style)

Convert a styled ansi string to react spans with classes for the styles

## Example
```js
var _ = require('lodash');
var jsCss = require('js-managed-css');
var React = require('react');
var ReactDOM = require('react-dom');
var reactAnsiStyle = require('react-ansi-style');

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
require('react-ansi-style/inject-css');//default css styles

ReactDOM.render(React.createElement('div', null,

  //////////////////////////////////
  //Here is where the magic happens
  reactAnsiStyle(React, ansi_string)

), document.body);
```

![react-ansi-style demo](https://raw.githubusercontent.com/smallhelm/react-ansi-style/master/example.png)

## API
### reactAnsiStyle = require('react-ansi-style')
### reactAnsiStyle(React, str, opts)
A function that returns an array of react `span` elements with css classes to style the string.
 * `React` - yes, pass in the React object, this avoids many of the React's peer-dependancy quirks.
 * `str` - the ansi string you want styled.
 * `opts.prefix` - a string prefix for the css classes, by default it's 'react-ansi-style-'

### require('react-ansi-style/inject-css')
This will inject the default CSS styling.

## License
MIT
