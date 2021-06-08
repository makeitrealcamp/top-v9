import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'
import Post from './pages/Post'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';

// protocolo - dominio - path/:username

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:postId" component={Post} />
        <Route path="*" component={NotFound} />
        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
