import { model, Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema({
  name: String,
  email: String,
}, {
  timestamps: true,
})

const User = model<IUser>('User', userSchema)

export default User
