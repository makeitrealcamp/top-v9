function Form({
  title,
  price,
  stock,
  handleChange,
  createProduct,
}) {
  return (
    <form onSubmit={createProduct}>
      <label htmlFor="title">Nombre</label>
      <input
        id="title"
        name="title" // this.state.name
        type="text"
        onChange={handleChange} // this.props.handleChange
        value={title}
      />
      <label htmlFor="price">Precio</label>
      <input
        id="price"
        name="price" // this.state.price
        type="number"
        onChange={handleChange}
        value={price}
      />
      <label htmlFor="stock">Cantidad</label>
      <input
        id="stock"
        name="stock" // this.state.stock
        type="number"
        onChange={handleChange}
        value={stock}
      />
      <button type="submit">Crear producto</button>
    </form>
  )
}

export default Form
