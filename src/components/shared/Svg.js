import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Svg extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };
  render() {
    const { className, href } = this.props;
    return (
      <svg className={className}>
        <use href={href} />
      </svg>
    );
  }
}

export default Svg;
