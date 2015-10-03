"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
               <div className="ui stackable menu">
                    <Link className="item"  to="app">
                        <img src="images/nav-logo.svg" />
                    </Link>
                    <Link to="app"  className="item">Home</Link>
                    <Link to="authors" className="item">Authors</Link>
                    <Link to="about" className="item">About</Link>
               </div>
        );
    }
});

module.exports = Header;
