module.exports = (req, res) => {
  console.log(req.headers)

  res.status(200).json({ message: 'hola mundo' })
}
