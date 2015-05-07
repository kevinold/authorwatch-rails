var React = require('react');
var Book = require('./Book');

var BookList = React.createClass({

  render: function() {
    var bookList = [];

    if (this.props.books) {
      this.props.books.map(function(title, i) {
        bookList.push(<Book title={title} key={i} />)
      }, this);
    }
    return (
      <div className="list-group">
      {bookList}
      </div>
    );
  }

});

module.exports = BookList;
