import Counter from './components/Counter'
import Button from './components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter something="algo" order="1" />
      <Button />
    </div>
  );
}

export default App;
