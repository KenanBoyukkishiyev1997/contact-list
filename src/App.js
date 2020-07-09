import React from 'react';
import Navbar from './companents/layout/Navbar'
import Home from './companents/page/Home'
import NotFound from './companents/page/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUser from './companents/users/AddUsers'
import EditUser from './companents/users/EditUser'
import Users from './companents/users/Users'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/users/add' component={AddUser}/>
          <Route exact path='/users/edit/:id' component={EditUser}/>
          <Route exact path='/users/:id' component={Users}/>
          <Route  component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
