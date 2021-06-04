import './App.css';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.dark ? '#333' : 'goldenrod'};

  &:hover {
    background-color: lightblue;
  }
`;

function App({ dark }) {
  // const style = {
  //   box: {
  //     width: 100,
  //     height: 100,
  //     backgroundColor: dark ? '#333' : 'goldenrod',
  //   },
  // }

  return (
    <div className="App">
      {/* <div className={`Box ${dark ? 'Box--dark' : '' }`}></div> */}
      {/* <div style={style.box} /> */}
      <StyledBox dark={dark} />
      <Button size="lg">Hola</Button>
    </div>
  );
}

export default App;
