var React = require('react');
var classnames = require('classnames');

var Book = React.createClass({

  render: function() {
    var classes = {
      'list-group-item': true,
      'active': false
    };
    return (
      <li href="#" className={classnames(classes)} onClick={this.handleClick}>
       <h4 className="list-group-item-heading">
          {this.props.title}
       </h4>
     </li>
    );
  }

});

module.exports = Book;
