"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hi James</h1>
                <p>This is currently just a playground for me</p>
                <Link to="about" className="ui primary button">Learn More</Link>
            </div>
        );
    }
});


module.exports = Home;
