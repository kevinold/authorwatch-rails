var React = require('react');
var AuthorWatchApp = require('./components/AuthorWatchApp');


var Authors = [ 'John Grisham', 'Harlan Coben', 'Stephen King' ];
var Books = {
  'John Grisham': ['The Firm', 'Runaway Jury'],
  'Harlan Coben': ['Tell No One', 'Hold Tight'],
  'Stephen King': ['It', 'Bag of Bones']
};

React.render(<AuthorWatchApp authors={Authors} books={Books} />, document.getElementById('app'));
