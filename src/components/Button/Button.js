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
      behavior: 'smooth',
    });
  }

  render() {
    return(
      <button
        onClick={this.scrollTo}
        className="button"
      >{this.props.value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  scroll: PropTypes.number,
};

export default Button;
