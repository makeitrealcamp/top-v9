function Product({ title, price, stock, buy }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        {price}
        {' '}
        <strong>{stock}</strong>
      </p>
      <button
        type="button"
        onClick={buy}
      >
        Comprar
      </button>
    </article>
  )
}

function Products({ products, buy }) {
  return (
    <main>
      <h1>Productos</h1>
      {products.map(el => (
        <Product
          key={el.id}
          buy={buy(el.id)}
          title={el.title}
          price={el.price}
          stock={el.stock}
        />
      ))}
    </main>
  )
}

export default Products
