/** @jsx React.DOM */

'use strict';

window.$ = require('jquery');
window._ = require('lodash');
var React = require('react/addons');
window.React = React;

var Avatar = React.createClass({
  render: function(){
    return (
      <div className="avatar">Avatar</div>
    )
  }
});

React.render(<Avatar/>, document.getElementById('mount-point'));

console.log('font-end app initialized');
var app = {foo: 'bar'};

module.exports = app;
