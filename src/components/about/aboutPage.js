"use strict";
var React = require('react');

var About = React.createClass({
    statics: {
      willTransitionTo: function(transition, params, query, callback) {
        // if(!confirm('Are you sure you want to read a page that\'s this boring?')) {
        //   transition.about();
        // } else {
        //   callback();
        // }
        callback();
      },
      willTransitionFrom: function(transition, component) {
        // if(!confirm('Are you sure you want to leavew a page that\'s this exciting?')) {
        //   transition.about();
        // }
      }
    },
    render: function() {
      return (
          <div>
              <h1>About</h1>
              <p>
                  This application uses the follow technologies
                  <ul>
                      <li>React</li>
                      <li>React Router</li>
                      <li>Flux</li>
                      <li>Node</li>
                      <li>Gulp</li>
                      <li>Browserify</li>
                      <li>Semantic UI</li>
                  </ul>
              </p>
          </div>
      );
    }
});

module.exports = About;
