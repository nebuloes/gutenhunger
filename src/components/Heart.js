import React, { Component } from 'react'
import PropTypes from 'prop-types'

import heart from '../heart.png'
import heartFilled from '../heart-fill.png'

export default class Heart extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    filled: PropTypes.any,
  }

  render() {
    const { onClick, filled } = this.props
    const heartIcon = filled ? heartFilled : heart
    return <img onClick={onClick} src={heartIcon} alt="" />
  }
}
