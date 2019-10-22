import React, { Component } from 'react';

class Input extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            impression: ''
        }
    }
    handleFirstNameChange = (event) => {
        this.setState({
            user: {
                firstName: event.target.value,
                lastName: this.state.user.lastName,
                impression: this.state.user.impression
            }
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            user: {
                firstName: this.state.user.firstName,
                lastName: event.target.value,
                impression: this.state.user.impression
            }
        })
    }
  render() {
    return (
      <>
        <input
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={this.state.user.firstName}
        ></input>
        <input
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={this.state.user.lastName}
        ></input>
        <p>{this.state.user.firstName} {this.state.user.lastName}</p>
      </>
    );
  }
}

export default Input;