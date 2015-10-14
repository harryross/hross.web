"use strict";
import Dropdown from '../common/dropdown'

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
                 <ul className="nav">
                   <li>
                     <Link to="home" className="menubar-item">Home</Link>
                    </li>
                    <li>
                      <Link to="authors" className="menubar-item">Authors</Link>
                    </li>
                    <li>
                      <Link to="about" className="menubar-item">About</Link>
                    </li>
                    <li>
                      <Dropdown />
                    </li>
                  </ul>
        );
    }
});

module.exports = Header;
