const sum = require('./_sum')

module.exports = (req, res) => {
  const { a, b } = req.body

  const result = sum(a, b)

  res.status(200).json({ result })
}
