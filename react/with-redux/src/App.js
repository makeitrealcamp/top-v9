import Counter from './components/Counter'
import Button from './components/Button'
import TextArea from './components/TextArea';
import Text from './components/Text';
import Posts from './components/Posts';
import './App.css';

function App() {

  return (
    <div className="App">
      <Counter something="algo" order="1" />
      <Button />
      <TextArea />
      <Text />
      <Posts />
    </div>
  );
}

export default App;
