"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
                 <ul className="nav">
                   <li>
                     <Link to="app" className="menubar-item">Home</Link>
                    </li>
                    <li>
                      <Link to="authors" className="menubar-item">Authors</Link>
                    </li>
                    <li>
                      <Link to="about" className="menubar-item">About</Link>
                    </li>
                  </ul>
        );
    }
});

module.exports = Header;
