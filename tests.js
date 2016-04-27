var _ = require('lodash');
var test = require('tape');
var chalk = require('chalk');
var reactAnsiStyle = require('./');

test('not much to test, ansi-style-parser does most of the work', function(t){
  var React = {
    createElement: function(type, opts, body){
      if(_.isString(opts && opts.className)){
        var classes = _.compact(_.map(opts.className.split(' '), function(c){
          return c.trim();
        }));
        if(_.size(classes) > 0){
          type += '.' + classes.join('.');
        }
      }
      return [type, _.omit(opts, 'className'), body];
    }
  };

  var tst = function(str, expected){
    t.deepEquals(reactAnsiStyle(React, str, {
      prefix: 'a-'
    }), expected);
  };

  tst(chalk.red('hello'), [
    ['span.a-red', {key: 0}, 'hello']
  ]);

  tst('one'+chalk.bold(chalk.underline.bgGreen.red(' two')+' three')+' 4', [
    ['span', {key: 0}, 'one'],
    ['span.a-bold.a-underline.a-bgGreen.a-red', {key: 1}, ' two'],
    ['span.a-bold', {key: 2}, ' three'],
    ['span', {key: 3}, ' 4']
  ]);

  t.end();
});
