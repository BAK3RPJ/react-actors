import React, { Component } from 'react';

class Input extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            impression: ''
        }
    }
    handleFirstName = (event) => {
        this.setState({
            user: {
                firstName: event.target.value,
                lastName: this.state.user.lastName,
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
        <p>{this.state.user.firstName}</p>
      </>
    );
  }
}

export default Input;