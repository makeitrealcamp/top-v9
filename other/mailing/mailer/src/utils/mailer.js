const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.aol.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  }
})

async function verify() {
  const connection = await transporter.verify()

  if(connection) {
    console.log('Server ready to take messages')
  }
}

async function welcome({ email, name }) {
  await transporter.sendMail({
    from: `"${process.env.MAILER_USERNAME}" <${process.env.MAILER_USER}>`,
    to: email,
    subject: 'Welcome',
    html: `
      <div>
        <h1>Hola ${name}</h1>
        <p>Bienvenido a la applicación yyyyyyyyyy</p>
        <a href="http://localhost:8000">Ingresa aquí</a>
        <img width="300" height="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg" />
      </div>
    `
  })
}

async function recover({ email, name, recoverToken }) {
  await transporter.sendMail({
    from: `"${process.env.MAILER_USERNAME}" <${process.env.MAILER_USER}>`,
    to: email,
    subject: 'Recover Password',
    html: `
      <div>
        <h1>Hola ${name}</h1>
        <a href="http://localhost:8000/recover?recoverToken=${recoverToken}">Ingresa aquí</a>
      </div>
    `
  })
}

module.exports = {
  transporter,
  verify,
  welcome,
}
