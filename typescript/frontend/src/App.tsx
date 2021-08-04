import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

interface IGreet {
  name: string
}

// const Greet: React.FC<IGreet> = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }
function Greet({ name }: IGreet) {
  // const [age, setAge] = useState(0)
  const [age] = useState<number | string>(0)

  useEffect(() => {
    console.log('mounting....')
  }, [])

  return (
    <div>
      <h1>Hola {name} {age}</h1>
    </div>
  )
}

// class Greet extends React.Component<IState, IProps>

function App() {
  // function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //   setName(e.target.value)
  // }

  // const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   console.log('hola mundo')
  // }

  return (
    <div className="App">
      <Greet name="María" />
      <button
        type="button"
        onClick={() => console.log('hola mundo')}
      >
        Click
      </button>
    </div>
  );
}

export default App;
