import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  display: inline;
`

const StyledLi = styled.li`
  position: relative;
`

const ButtonSection = styled.section`
  color: rgb(210, 140, 55);
  position: absolute;
  top: -5px;
  right: 0;
  z-index: 2;
  font-size: 18pt;
`

export default class FridgeItem extends Component {
  static propTypes = {
    fridgeItem: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
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
      <StyledLi>
        <input
          data-test-id="edit-item-input"
          autoFocus
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
        />
        <ButtonSection>
          <span onClick={() => this.submitEdit()}>&#10003;</span>
          <span onClick={onDelete}>&times;</span>
        </ButtonSection>
      </StyledLi>
    ) : (
      <StyledLi data-test-id="Fridge-item">
        <StyledH3>{fridgeItem}</StyledH3>
        <ButtonSection>
          <span data-test-id="edit-item" onClick={() => this.editItem()}>
            &#9998;
          </span>
          <span data-test-id="delete-item" onClick={onDelete}>
            &times;
          </span>
        </ButtonSection>
      </StyledLi>
    )
  }
}
