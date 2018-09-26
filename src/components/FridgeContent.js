import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FridgeItem from './FridgeItem'

export default class FridgeContent extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    fridgeContent: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  }

  state = {
    inputValue: '',
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
      this.props.onSubmit(inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    const { fridgeContent, onEdit, onDelete } = this.props
    return (
      <div>
        <input
          data-test-id="Fridge-input"
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
          placeholder="Enter Item"
          autoFocus
          value={this.state.inputValue}
          type="text"
        />
        <ul>
          {fridgeContent.map((item, index) => (
            <FridgeItem
              key={index}
              onEdit={inputValue => onEdit(inputValue, index)}
              onDelete={() => onDelete(index)}
              fridgeItem={item}
            />
          ))}
        </ul>
      </div>
    )
  }
}
