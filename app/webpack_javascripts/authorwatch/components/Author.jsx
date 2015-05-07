var React = require('react');
var classnames = require('classnames');

var Author = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    this.props.selectedAuthorCallback(this.props.name);
  }, 

  render: function() {
    var classes = {
      'list-group-item': true,
      'active': this.props.selectedAuthor === this.props.name
    };
    return (
      <li href="#" className={classnames(classes)} onClick={this.handleClick}>
       <span className="pull-right"><i className="glyphicon glyphicon-chevron-right"></i></span>
       <h4 className="list-group-item-heading">
          {this.props.name}
       </h4>
     </li>
    );
  }

});

module.exports = Author;
