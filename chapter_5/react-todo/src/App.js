import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List';

class App extends React.Component {
  state = {
    list: [{
      value: 'NewTask',
      status:true
    },{
      value: 'NewTask2',
      status: false
    }]
  }

  handleTodoList = list => {
    this.setState({ list })
  }

  render() {
    const list = this.state.list;

    return (
      <div className="App">
        <AddTodo 
          data = {list}
          onChange = {this.handleTodoList}
        />
        <List 
          data={list}
          onChange = {this.handleTodoList}
        />
      </div>
    );
  }
}

export default App;
