import mongoose from 'mongoose'

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
})

export default mongoose.model('Collection', CollectionSchema)
