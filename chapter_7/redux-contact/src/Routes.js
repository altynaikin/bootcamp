import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddContact from './components/AddContact';
import List from './components/List';
import EditContact from './components/EditContact';

function Routes() {
  return (
    <Router>
      <Route exact path="/list" component={List} />
      <Route exact path="/">
        <AddContact />
        <List />
      </Route>
      <Route exact path="/edit" component={EditContact} />
    </Router>
  );
}

export default Routes;

