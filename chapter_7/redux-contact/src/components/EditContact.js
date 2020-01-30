import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateContact } from '../redux/actions';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import './EditContact.css'

class EditContact extends Component {
  state = {
      name: '',
      lastName: '',
      phone: ''
  }

  handleNameChange = event => {
    const name = event.target.value;

    this.setState({ name })
  }

  handleLastNameChange = event => {
    const lastName = event.target.value;

    this.setState({ lastName })
  }

  handlePhoneChange = event => {
    const phone = event.target.value;

    this.setState({ phone })
  }

  componentDidMount() {
    const currentIndex = this.props.currentIndex;
    const data = this.props.data;

    this.setState ({
      name: currentIndex !== -1 ? data[currentIndex].name : '',
      lastName: currentIndex !== -1 ? data[currentIndex].lastName : '',
      phone: currentIndex !== -1 ? data[currentIndex].phone : ''
    })
  }

  handleSave = () => {
  this.props.updateContact(this.props.data, this.state, this.props.currentIndex)
  this.props.history.push('/')
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <input className="input-edit"
          onChange={this.handleNameChange}
          value={this.state.name}
          type="text"
        />
        <input className="input-edit"
          onChange={this.handleLastNameChange}
          value={this.state.lastName}
          type="text"
        />
        <input className="input-edit"
          onChange={this.handlePhoneChange}
          value={this.state.phone}
          type="text"
        />
        <div className='buttons'>
          <button className="btn-save-contact" onClick={this.handleSave}>Save</button>
          <button className="btn-cancel" onClick={this.handleBack}>Cancel</button>
          </div>

      </div>
        );
      }
    }

    const mapStateToProps = state => {
      return state
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        updateContact: (data, obj, index) => dispatch(updateContact(data, obj, index))
      }
    }
    
    export default compose(
      withRouter,
      connect(mapStateToProps, mapDispatchToProps)
    )(EditContact);