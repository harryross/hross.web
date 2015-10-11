"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
                 <ul className="nav">
                   <li className="menubar-item">
                     <Link to="home">Home</Link>
                    </li>
                    <li className="menubar-item">
                      <Link to="authors">Authors</Link>
                    </li>
                    <li className="menubar-item">
                      <Link to="about">About</Link>
                    </li>
                  </ul>
        );
    }
});

module.exports = Header;
