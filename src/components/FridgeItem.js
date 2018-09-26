import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FridgeItem extends Component {
  static propTypes = {
    fridgeItem: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    inputValue: PropTypes.string,
  }

  state = {
    edit: false,
    inputValue: '',
  }

  editItem() {
    this.setState({
      edit: true,
      inputValue: this.props.fridgeItem,
    })
  }

  updateInputValue = event => {
    const input = event.target
    this.setState({
      inputValue: input.value,
    })
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue !== '') {
      this.submitEdit()
    }
  }

  submitEdit() {
    const { inputValue } = this.state
    this.props.onEdit(inputValue)
    this.setState({ edit: false, inputValue: '' })
  }

  render() {
    const { onDelete, fridgeItem } = this.props
    return this.state.edit ? (
      <li>
        <input
          autoFocus
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
        />{' '}
        <span onClick={() => this.submitEdit()}>&#10003;</span>
        <span onClick={onDelete}>&times;</span>
      </li>
    ) : (
      <li data-test-id="Fridge-item">
        {fridgeItem}
        <span onClick={() => this.editItem()}>&#9998;</span>
        <span onClick={onDelete}>&times;</span>
      </li>
    )
  }
}
