// Render props => children, render
function Render({ children }) {
  // logica
  const history = 'hola'
  const location = 'mundo'
  const match = 'match'

  return children({ history, location, match })
}

function About({ children }) {
  return (
    <Render>
      {(props) => {
        console.log('About', props)
        return (
          <h1 className="tilte">{props.history}</h1>
        )
      }}
    </Render>
  )
}

export default About
