const nodemailer = require('nodemailer')

async function app() {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  })

  const status = await transporter.verify()
  console.log(status ? 'Connection with email server established' : 'Something went wrong')

  const user = { email: 'maria@test.com', name: 'María' }

  const styles = {
    container: 'background-color:goldenrod; color: #333; font-size: 24px'
  }

  const mail = await transporter.sendMail({
    from: '"Make it Real" <makeitreal@test.com>',
    to: user.email,
    subject: 'Welcome',
    html: `
      <div style=${styles.container}>
        <h1>Hola ${user.name}</h1>
      </div>
    `,
    text: `
    Welcome,

    Hola ${user.name}
    `
  })

  console.log(nodemailer.getTestMessageUrl(mail))
}

app()
