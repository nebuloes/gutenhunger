import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FridgeItem extends Component {
  static propTypes = {
    fridgeItem: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  }

  render() {
    const { onEdit, onDelete, fridgeItem } = this.props
    return (
      <li data-test-id="Fridge-item">
        {fridgeItem}
        <span onClick={onEdit}>&#9998;</span>
        <span onClick={onDelete}>&times;</span>
      </li>
    )
  }
}
