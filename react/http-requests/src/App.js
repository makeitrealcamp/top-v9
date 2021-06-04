import logo from './logo.svg';
import axios from 'axios'
import './App.css';

// protocolo - ip/dominio:puerto - path
// https://makeitreal.camp/about/

// http://localhost:3000
// http://127.0.0.1:3000


function App() {
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts'
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
