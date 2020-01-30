import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createContact } from '../redux/actions';
import './AddContact.css'

class AddContact extends Component {
  state = {
    name: '',
    lastName: '',
    phone: ''
  }

  handleInputName = event => {
    const name = event.target.value
    this.setState({ name })
}

  handleInputLastName = event => {
    const lastName = event.target.value

    this.setState({ lastName })
  }

  handleInputPhone = event => {
    const phone = event.target.value

    this.setState({ phone })
  }

  handleClick = () => {
    const name = this.state.name;
        const lastName = this.state.lastName;
        const phone = this.state.phone;
        const data = [...this.props.data]
    this.props.dispatch(createContact(data, name, lastName, phone))
    this.setState ({ 
      name: '',
      lastName: '',
      phone: ''
  })
  }

  render() {
    return (
      <div className="container">
        <input className="input-add"
        onChange = {this.handleInputName}
        value={this.state.name}
        type="text" />
        <input className="input-add"
        onChange = {this.handleInputLastName}
        value={this.state.lastName}
        type="text" />
        <input className="input-add"
        onChange = {this.handleInputPhone}
        value={this.state.phone}
        type="text" />
        <button className="btn-add-contact" onClick={this.handleClick}>AddContact</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(AddContact);