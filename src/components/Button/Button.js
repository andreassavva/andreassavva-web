import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(scroll) {
    console.log(scroll);
  }

  render() {
    return(
      <button onClick={this.scrollTo(this.props.scroll)} value={this.props.value}/>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  scroll: PropTypes.number,
};

export default Button;
