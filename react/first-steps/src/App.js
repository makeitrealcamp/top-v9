import './App.css';

// JSX - JavaScript and XML
// 1. Toda etiquete se tiene que cerrar.
// 2. Un componente solo puede retornar un elemento a la vez.
// 3. Atributos de html que su nombre sea igual a una palabra reservada de JS se debe utilizar una alternativa de
// React
// class -> className
// for -> htmlFor

function Title({ name, age }) {
  return (
    <h1>Hola {name} {age}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title name="Ana" age={30}></Title>
      <Title name="María" />
      <Title name="Martin" age={23} />
    </div>
  );
}

export default App;
