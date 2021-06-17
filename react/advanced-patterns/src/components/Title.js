import { withRouter } from 'react-router-dom'

function Title(props) {
  console.log('Title', props)

  return <h1>{props.children}</h1>
}

export default withRouter(Title)
