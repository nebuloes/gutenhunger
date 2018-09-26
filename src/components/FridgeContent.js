import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FridgeContent extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    fridgeContent: PropTypes.array,
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
          {this.props.fridgeContent.map((item, index) => (
            <li data-test-id="Fridge-item" key={index}>
              {item}
              <span>&#9998;</span>
              <span>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
