"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');


var Authors = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    if(this.isMounted){
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
  },
  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" class="ui primary button">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = Authors;
