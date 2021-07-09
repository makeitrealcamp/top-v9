const Busboy = require('busboy')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

function formData(req, res, next) {
  const busboy = new Busboy({ headers: req.headers })

  req.body = {}

  let uploadingFile = false
  let uploadingCount = 0

  function done() {
    if(uploadingFile) return
    if(uploadingCount > 0) return
    next()
  }

  busboy.on('field', (key, value) => {
    req.body[key] = value
  }) // type text

  busboy.on('file', (key, file) => {
    uploadingFile = true
    uploadingCount++

    const stream = cloudinary.uploader.upload_stream({
      upload_preset: 'mir-lesson'
    }, (err, res) => {
      if(err) {
        throw new Error('Invalid image')
      }

      req.body[key] = res.secure_url
      uploadingFile = false
      uploadingCount--
      done()
    })

    file.on('data', buffer => {
      stream.write(buffer)
    })

    file.on('end', () => {
      stream.end()
    })
  }) // type file

  busboy.on('finish', () => {
    done()
  })

  req.pipe(busboy)
}

module.exports = formData
