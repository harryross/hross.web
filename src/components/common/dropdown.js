"use strict";

import React from 'react'

var Dropdown = React.createClass({
  getInitialState: function() {
    return {
      dropDownVisible: false
    };
  },
  render: function() {
    let dropdownClass = 'dropdown';
    var expandDropDown = function() {
      dropdownClass += 'show';
    };

    return (
      <div className="container">
        <ul>
          <li className={dropdownClass}>
            <a href="#" className="dropdown" handler={expandDropDown}>First Menu <i className="icon-arrow"></i></a>
            <ul className="dropdown-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
