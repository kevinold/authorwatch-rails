var React = require('react');
var Author = require('./Author');

var AuthorList = React.createClass({

  render: function() {
    var authorList = [];

    this.props.authors.map(function(author, i) {
      authorList.push(<Author
        name={author}
        key={i}
        selectedAuthorCallback={this.props.selectedAuthorCallback}
        selectedAuthor={this.props.selectedAuthor}
        />)
    }, this);

    return (
      <div className="list-group">
      {authorList}
      </div>
    );
  }

});

module.exports = AuthorList;
