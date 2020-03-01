import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo() {
    window.scrollTo({
      top: this.props.scroll,
      behavior: 'smooth'
    });
  }

  render() {
    {
      /*<a href={`#${this.props.scroll}`}>{this.props.value}</a>*/
    }
    return (
      <button
        onClick={this.scrollTo}
        className="button"
        style={this.props.border && { border: '2px solid white' }}
      >
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  scroll: PropTypes.number,
  section: PropTypes.string,
  border: PropTypes.bool
};

export default Button;
