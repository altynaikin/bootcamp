import React from 'react';
import axios from 'axios';


class Contact extends React.Component {

  state = {
    inputName: '',
    inputLastName: '',
    inputPhone: ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.currentContact !== this.props.currentContact) {
      this.fetchData(nextProps.currentContact)
    }
    return nextProps !== this.props || nextState !== this.state
  }

  fetchData = async id => {
    
    const response = await axios.get(`http://localhost:8000/list/${id}`);

    this.setState({ 
      inputName:response.data.nameValue,
      inputLastName:response.data.lastNameValue,
      inputPhone:response.data.phoneValue
     });
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
    const id = this.props.currentContact;
    
    const obj = {
    nameValue: this.state.inputName,
    lastNameValue: this.state.inputLastName,
    phoneValue: this.state.inputPhone
    }

    // if (!nameValue || !lastNameValue || !phoneValue || this.props.currentContact===null) return

    const response = await axios.patch(`http://localhost:8000/list/${id}`, obj);

    
    const getResponse = await axios.get(`http://localhost:8000/list`)
    

      // if (!this.props.onChange) return
      // this.props.onCancel(null);

    this.props.onChange(getResponse.data)
    this.props.handleIdContact(id)
    this.setState({ inputName: '' })
    this.setState({ inputLastName: '' })
    this.setState({ inputPhone: '' })

  }
  

  render() {

    if(this.props.isEdit) {

      return (
        <div>
          <input  onChange={this.handleInputName}
            value={this.state.inputName}
            placeholder="Name"
            type="text" />
          <input  onChange={this.handleInputLastName}
            value={this.state.inputLastName}
            placeholder="LastName"
            type="text"/>
          <input  onChange={this.handleInputPhone}
            value={this.state.inputPhone}
            placeholder="Phone"
            type="text"/>
          <button onClick={this.handleAddContact} className="btn save">Save</button>
        </div>
      )
    } else return false
  }
}

export default Contact;