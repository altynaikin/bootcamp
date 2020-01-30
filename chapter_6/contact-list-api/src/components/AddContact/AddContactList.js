import React from 'react';

import AddContact from './AddContact';
import List from "../List/List";
import Contact from '../List/Contact';

class AddContactList extends React.Component {
  state =  {
    data: [{}],
    currentContact: null,
    isEdit: false
  }

  handleAddContact = data => {
    this.setState({ data })
  }

  handleIdContact = id => {
    this.setState({ 
      currentContact: id,
      isEdit: !this.state.isEdit 
    })
  }

  render() {
    return (
      <div>
        <AddContact 
         onChange={this.handleAddContact}
        />
        <List 
          data={this.state.data}
          handleIdContact={this.handleIdContact}
        />
        <Contact 
          currentContact={this.state.currentContact}
          onChange={this.handleAddContact}
          isEdit={this.state.isEdit}
          handleIdContact={this.handleIdContact}
        />
      </div>
    )
  }
}

export default AddContactList;