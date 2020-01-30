import React from 'react';
import './App.css';

import AddContact from './Components/AddContact/AddContact';
import List from './Components/List/List';

class App extends React.Component {
  state = {
    list: [{
      nameValue: 'Altynai',
      lastNameValue: 'Zhumasheva',
      phoneValue: '+996778972966'
    },{
      nameValue: 'Iskender',
      lastNameValue: 'Zhumashev',
      phoneValue: '+996770005003'
    }]
  }

  handleContactList = list => {
    this.setState({ list })
  }

  handleDelete = itemIndex => {
    const newList = [...this.state.list];
    newList.splice(itemIndex,1);
    this.setState({ list: newList });
  };

  editContact=(obj,index)=>{
    const newList = [...this.state.list];
    newList[index]=obj;
    console.log(newList)
    this.setState({list: newList});
  }

  render() {
    const list = this.state.list;

     return (
        <div className="App">
          <header 
              className="navbar">
              <h1>Contact-list Book</h1>
          </header> 
          <AddContact
            data={list}
            onChange = {this.handleContactList}
            />
          <List 
            data={list}
            editContact={this.editContact}
            onChange = {this.handleContactList}
            onDelete={this.handleDelete}
          />
        </div>
    )
  }
}
  
  
  export default App;
