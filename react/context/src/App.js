import './App.css';
import CounterProvider from './store/counterContext';
import Counter from './components/Counter'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <Button />
      </CounterProvider>
    </div>
  );
}

export default App;
