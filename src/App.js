import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import AddFriend from './Components/AddFriend';
import Logout from './Components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>FRIENDS DATABASE</h2>
        <nav>
          <Link to='/login'>LOGIN</Link>
          <Link to='/friends/add'>ADDFRIEND</Link>
          <Link to='/friends'>FRIENDLIST</Link>
          <Link to='/logout'>LOGOUT</Link>
        </nav>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/friends/add' component={AddFriend} />
          <Route exact path='/friends' component={FriendsList} />
          <Route exact path='/' component={Login}/>
          <Route exact path='/Logout' component={Logout}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
