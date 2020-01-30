import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import List from './components/List/List';
// import AddContact from './components/AddContact/AddContact';
import AddContactList from './components/AddContact/AddContactList';
import Contact from './components/List/Contact';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
          
            <AddContactList />

          </Route>

          <Route exact path='/contact'>

            <Contact 
            />

          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes;
