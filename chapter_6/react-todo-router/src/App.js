import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List';

class App extends React.Component {
  state = {
    list: [{
      value: 'NewTask',
      status: true
    }, {
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
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/">
              <AddTodo
                data={list}
                onChange={this.handleTodoList}
              />
              <Link to="/">
                <button>Show List</button>
              </Link>
            </Route>

            <Route path="/list">
              <List
                data={list}
                onChange={this.handleTodoList}
              />
              <Link to="/">
                <button>Home</button>
                </Link>
            </Route>

          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
