"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Xero Push Administration</h1>
                <p>React, React Router, and flux for ultra-responsive web app.</p>
                <Link to="about" className="ui primary button">Learn More</Link>
            </div>
        );
    }
});


module.exports = Home;
