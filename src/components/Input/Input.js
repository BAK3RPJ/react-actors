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
    handleImpressionChange = (event) => {
        this.setState({
            user: {
                firstName: this.state.user.firstName,
                lastName: this.state.user.lastName,
                impression: event.target.value
            }
        })
    }
    handleButtonClick = () => {
        alert(`Thank you ${this.state.user.firstName} for joining us!`);
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                impression: ''
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
        <input
            placeholder="Impression"
            onChange={this.handleImpressionChange}
            value={this.state.user.impression}
        ></input>
        <button
            onClick={this.handleButtonClick}
        >Submit!</button>
        {this.state.user.firstName && this.state.user.lastName && this.state.user.impression &&
        <p>{this.state.user.firstName} {this.state.user.lastName}'s best impression is {this.state.user.impression}</p>} 
      </>
    );
  }
}

export default Input;