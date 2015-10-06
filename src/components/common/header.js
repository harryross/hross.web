"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
               <div className="nav">
                    <Link to="app">Home</Link>
                    <Link to="authors">Authors</Link>
                    <Link to="about">About</Link>
               </div>
        );
    }
});

module.exports = Header;
