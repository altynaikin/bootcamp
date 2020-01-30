import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import { deleteContact, setEditIndex } from '../redux/actions';
import './List.css'

class List extends Component {

  handleClick = index => {
    this.props.history.push("/edit")
    this.props.setEditIndex(index)
  }

  render() {
    return (
      <ul className="contact-list">
        {this.props.data.map((item, index) => (
          <li className="list"
            onClick={() => this.handleClick(index)}
            key={index}>
            {item.nameValue}      {item.lastNameValue}
            {/* <br /> */}
            {item.phoneValue}
            <button className="btn-delete" onClick={event => {
              event.stopPropagation()
              this.props.deleteContact(this.props.data, index)
            }}
            >
            </button>
            <div className="item-list">
             <div className="list_it">{item.name}</div> 
             <div className="list_it">{item.lastName}</div>
             <div className="list_it">{item.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: (state, index) => {
      dispatch(deleteContact(state, index))
    },
    setEditIndex: (index) => {
      dispatch(setEditIndex(index))
    }
  }
}

export default compose(withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(List);