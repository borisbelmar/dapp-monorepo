import mongoose from 'mongoose'

let cachedDB: typeof mongoose | null = null

export const connectToMongo = async (uri?: string) => {
  const safeUri = process.env.MONGO_URI || uri
  if (!cachedDB || safeUri !== uri) {
    cachedDB = await mongoose.connect(safeUri as string)
  }
}

export const isObjectId = (id: string) => {
  return mongoose.isObjectIdOrHexString(id)
}
