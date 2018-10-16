import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FridgeItem from './FridgeItem'

const StyledInput = styled.input`
  width: 200px;
  border: 1pt solid grey;
  border-radius: 7px;
  padding: 5px;
  margin-bottom: 20px;
  margin-top: 40px;
`

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
        <center>
          <StyledInput
            data-test-id="Fridge-input"
            onChange={this.updateInputValue}
            onKeyUp={this.checkForEnterButton}
            placeholder="Was ist in deinem Kühlschrank?"
            autoFocus
            value={this.state.inputValue}
            type="text"
          />
        </center>
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
