import Counter from './components/Counter'
import Button from './components/Button'
import TextArea from './components/TextArea';
import Text from './components/Text';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter something="algo" order="1" />
      <Button />
      <TextArea />
      <Text />
    </div>
  );
}

export default App;
