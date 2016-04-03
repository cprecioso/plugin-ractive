'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Ractive = _interopDefault(require('ractive'));
var rcu = require('rcu');
var rcuBuilders = require('rcu-builders');

rcu.init(Ractive);

function translate(load) {
  var definition = rcu.parse(load.source);
  return rcuBuilders.es6(definition, {
    preserveExtensions: true
  });
}

exports.translate = translate;