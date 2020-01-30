import React from 'react';
import axios from 'axios';

class AddContact extends React.Component {
  state = {
    inputName: '',
    inputLastName: '',
    inputPhone: ''
  }

  handleInputName = event => {
    this.setState({ inputName: event.target.value })
  }

  handleInputLastName = event => {
    this.setState({ inputLastName: event.target.value })
  }

  handleInputPhone = event => {
    this.setState({ inputPhone: event.target.value })
  }

  handleAddContact = async () => {
    const nameValue = this.state.inputName;
    const lastNameValue = this.state.inputLastName;
    const phoneValue = this.state.inputPhone;
    
    const obj = {
      nameValue,
      lastNameValue,
      phoneValue
    }
    if (!nameValue || !lastNameValue || !phoneValue) return

    const response = await axios.post(`http://localhost:8000/list`, obj);

    if (response.status > 200 && response.status < 300) {
      const getResponse = await axios.get(`http://localhost:8000/list`)

      if (!this.props.onChange) return
      this.props.onChange(getResponse.data);
    }
        this.setState({ inputName: '' })
        this.setState({ inputLastName: '' })
        this.setState({ inputPhone: '' })
  }

  render() {
    return (
      <div className="add-contact">
        <input
          onChange={this.handleInputName}
          value={this.state.inputName}
          placeholder="Name"
          type="text"
        />
        <input
          onChange={this.handleInputLastName}
          value={this.state.inputLastName}
          placeholder="LastName"
          type="text"
        />
        <input
          onChange={this.handleInputPhone}
          value={this.state.inputPhone}
          placeholder="Phone"
          type="text"
        />
        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    )
  }
}

export default AddContact;
