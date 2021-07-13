import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import axios from 'axios'
import './App.css';

function Home() {
  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
    external: false,
    autoclick: false,
    lang: 'es',
  })

  function handlePayment() {
    const data = {
      tax: 0,
      tax_base: 0,
      amount: 20000,
      name: 'Programa TOP Make it Real',
      description: 'Programa Fullstack Inmersivo',

      currency: 'cop',
      country: 'CO',

      invoice: '12345',
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',

      response: `${process.env.REACT_APP_BASE_URL}/response`,

      name_billing: 'María Lopez',
      address_billing: 'Calle 23 # 54 - 10',
      type_doc_billing: 'CC',
      number_doc_billing: '1239075396',
      mobilephone_billing: '3298471233',

      methodsDisable: ['DP', 'PSE', 'SP'],
    }

    handler.open(data)
  }

  return (
    <div className="App">
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
}

function queryString(query) {
  const res = {}
  query
    .replace('?', '')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=')
      res[key] = value
    })
  return res
}

function Response() {
  const location = useLocation()
  // location.search = '?ref_payco=6783984880b17314a21c0684'

  useEffect(() => {
    const { ref_payco } = queryString(location.search)

    axios({
      method: 'GET',
      baseURL: 'https://secure.epayco.co',
      url: `/validation/v1/reference/${ref_payco}`,
    })
      .then(({ data }) => console.log(data))
  }, [location])

  return (
    <div className="App">

    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/response">
          <Response />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
