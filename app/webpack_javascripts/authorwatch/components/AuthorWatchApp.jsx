var React = require('react');
var AuthorList = require('./AuthorList');
var BookList = require('./BookList');

var AuthorWatchApp = React.createClass({
  getInitialState: function() {
    return {
      selectedAuthor: undefined,
      selectedBooks: undefined
    };
  },

  handleSelectedAuthor: function(selectedAuthor){
    var selectedBooks = this.props.books[selectedAuthor];
    this.setState({ selectedAuthor: selectedAuthor, selectedBooks: selectedBooks });
  }, 

  render: function() {
    return (
      <div className="col-md-12">

        <div className="row">
          <div className="col-md-4">
            <h2>AuthorWatch</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-md-4">
            <AuthorList authors={this.props.authors} selectedAuthorCallback={this.handleSelectedAuthor} selectedAuthor={this.state.selectedAuthor}/>
          </div>

          <div className="col-md-8">
            <BookList books={this.state.selectedBooks} />
          </div>

        </div>

      </div>
    );
  }

});

module.exports = AuthorWatchApp;
