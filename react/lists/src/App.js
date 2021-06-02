import './App.css';
import { tasksMock } from './data.js'
import Task from './components/Task'

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      {tasksMock.map(({ id, title, done }) => {
        return <Task key={id} title={title} done={done} />
      })}
    </div>
  )
}

export default App;
