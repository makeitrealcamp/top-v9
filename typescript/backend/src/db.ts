import mongoose from 'mongoose'

export async function connect(): Promise<void> {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/database'
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  mongoose.connect(mongoURI, options)

  const { connection } = mongoose

  connection.once('open', () => {
    console.log('Connection established successfully')
  });

  connection.on('error', error => {
    console.log('Something went wrong', error)
  });
}
