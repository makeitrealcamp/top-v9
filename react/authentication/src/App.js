import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css';
import React from 'react';

function Home() {
  return <h1>Home</h1>
}

class PrivateRoute extends React.Component {
  state = {
    isAllowed: true
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    this.setState({
      isAllowed: !!token
    })
  }

  render() {
    if(!this.state.isAllowed) return <Redirect to="/login" />
    return <Route {...this.props} />
  }
  // <Route
  //   exact={this.props.exact}
  //   path={this.props.path}
  //   component={this.props.component}
  // />
}

function App() {
  function logout() {
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <button
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
