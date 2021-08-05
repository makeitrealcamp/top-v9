import { model, Schema, Document } from 'mongoose'
import { IUser } from './user.model'

interface ITask extends Document {
  title: string;
  description: string;
  done: boolean;
  owner: IUser['_id'];
}

const taskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
})

const Task = model<ITask>('Task', taskSchema)

export default Task;
