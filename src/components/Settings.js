import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  display: inline;
`

const StyledLi = styled.div`
  position: relative;
`

const StyledHeadline = styled.div`
  font-size: 8pt;
  margin-top: 40px;
`

const ButtonSection = styled.section`
  color: rgb(240, 180, 65);
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
    onEdit2: PropTypes.func,
    onDelete: PropTypes.func,
    username: PropTypes.string,
    age: PropTypes.string,
  }

  state = {
    edit: false,
    edit2: false,
    inputValue: '',
  }

  editItem() {
    this.setState({
      edit: true,
      inputValue: this.props.username,
    })
  }

  editItem2() {
    this.setState({
      edit2: true,
      inputValue: this.props.age,
    })
  }

  submitEdit2() {
    const { inputValue } = this.state
    this.props.onEdit2(inputValue)
    this.setState({ edit2: false, inputValue: '' })
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

  checkForEnterButton2 = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue !== '') {
      this.submitEdit2()
    }
  }

  submitEdit() {
    const { inputValue } = this.state
    this.props.onEdit(inputValue)
    this.setState({ edit: false, inputValue: '' })
  }

  render() {
    const { onDelete, username, age } = this.props
    return (
      <React.Fragment>
        <StyledHeadline>Username</StyledHeadline>
        {this.state.edit ? (
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
          <StyledLi data-test-id="username">
            <StyledH3 onClick={() => this.editItem()}>{username}</StyledH3>
          </StyledLi>
        )}
        <StyledHeadline>Alter</StyledHeadline>
        {this.state.edit2 ? (
          <StyledLi>
            <input
              data-test-id="edit-item-input"
              autoFocus
              value={this.state.inputValue}
              onChange={this.updateInputValue}
              onKeyUp={this.checkForEnterButton2}
            />
            <ButtonSection>
              <span onClick={() => this.submitEdit2()}>&#10003;</span>
              <span onClick={onDelete}>&times;</span>
            </ButtonSection>
          </StyledLi>
        ) : (
          <StyledLi data-test-id="age">
            <StyledH3 onClick={() => this.editItem2()}>{age}</StyledH3>
          </StyledLi>
        )}
      </React.Fragment>
    )
  }
}
