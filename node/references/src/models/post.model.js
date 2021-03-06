const { model, Schema } = require('mongoose')

const postSchema = new Schema({
  title: String,
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
})

const Post = model('Post', postSchema)

module.exports = Post;
