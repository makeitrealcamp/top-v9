import React from 'react'
import './App.css';
import Form from './components/Form';
import Products from './components/Products';

class App extends React.Component {
  state = {
    title: '',
    price: 0,
    stock: 0,
    products: [],
    count: 1,
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  createProduct = e => {
    e.preventDefault()

    const { count, title, price, stock, products } = this.state

    const product = {
      id: count,
      title,
      price,
      stock,
    }

    // this.state.products.slice(0).push(product)
    // [ ...this.state.products, product ]
    // this.state.products.concat(product)

    let shouldAdd = true
    let newProducts = products.map(el => {
      if(el.title === product.title && el.price === product.price) {
        shouldAdd = false
        return { ...el, stock: +el.stock + +product.stock }
      }

      return el
    })

    if(shouldAdd) {
      newProducts = newProducts.concat(product)
    }

    this.setState({
      products: newProducts,
      count: count + 1,
      title: '',
      price: 0,
      stock: 0,
    })
  }

  // function buy(id) {
  //   return function (e) {
  //     console.log(id)
  //   }
  // }

  buy = id => e => {
    const { products } = this.state

    const newProducts = products.map(el => {
      if(id === el.id) {
        if(el.stock <= 1) {
          return null
        }

        return { ...el, stock: el.stock - 1 }
      }

      return el
    })

    this.setState({
      products: newProducts.filter(el => el !== null),
    })
  }

  render() {
    const { title, price, stock, products } = this.state
    return (
      <div className="App">
        <Form
          title={title}
          price={price}
          stock={stock}
          handleChange={this.handleChange}
          createProduct={this.createProduct}
        />
        <Products
          products={products} // this.state.products
          buy={this.buy}
        />
      </div>
    );
  }
}

export default App;
