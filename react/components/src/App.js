import React from 'react'
import './App.css';

// function Button({ children }) {
  // console.log(props)
  // const { children } = props
//   return (
//     <button>{children}</button>
//   )
// }

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    // this.increment = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // const { children } = this.props
    return (
      <button onClick={this.handleClick} disabled={this.state.count >= 10}>{this.state.count}</button>
    )
  }
}

class Feeling extends React.Component {
  state = {
    feeling: 'down',
  }

  setGreen = () => {
    this.setState({
      feeling: 'up'
    })
  }

  setBlue = () => {
    this.setState({
      feeling: 'down'
    })
  }

  render() {
    return (
      <>
        <p>{this.state.feeling === 'down' ? 'blue' : 'green' }</p>
        <button onClick={this.setBlue}>Down</button>
        <button onClick={this.setGreen}>Up</button>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/*
        <Button name="maria" age={24} working obj={{ a: 1, b: 2 }} arr={[ 1,2,3 ]}>Click</Button>
      */}
      <Button>Hola</Button>
      <Button>mundo</Button>
      <Feeling />
    </div>
  );
}

export default App;
