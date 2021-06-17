import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/something"
          render={(props) => {
            console.log('Route', props)

            return (
              <h1 {...props}>something</h1>
            )
          }}
        />
        {/* <Route exact path="/something" render={(props) => <Something hola="hola" {...props} />} */}
      </Switch>
    </Router>
  );
}

export default App;
