import mongoose from 'mongoose'

const MediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: false
  }
})

export default mongoose.model('Media', MediaSchema)
