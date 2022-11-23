import { connectToMongo } from 'backend-utils'
import { Repository } from 'local-types'
import { CollectionEntity } from './CollectionEntity'
import CollectionModel from './CollectionModel'

export default function getCollectionRepository (): Repository<CollectionEntity> {
  const find = async (findParams: any): Promise<CollectionEntity[]> => {
    await connectToMongo()
    const collections = await CollectionModel.find(findParams)
    return collections.map((collection) => collection.toJSON())
  }

  const findOneById = async (id: string): Promise<CollectionEntity | null> => {
    await connectToMongo()
    const collection = await CollectionModel.findById(id)
    return collection?.toJSON() as CollectionEntity ?? null
  }

  const create = async (collection: CollectionEntity): Promise<CollectionEntity> => {
    await connectToMongo()
    const createdCollection = await CollectionModel.create(collection)
    return createdCollection.toJSON() as CollectionEntity
  }

  const update = async (id: string, collection: CollectionEntity): Promise<CollectionEntity | null> => {
    await connectToMongo()
    const updatedCollection = await CollectionModel.findByIdAndUpdate(id, collection, { new: true })
    return updatedCollection?.toJSON() as CollectionEntity ?? null
  }

  const deleteOne = async (id: string): Promise<CollectionEntity | null> => {
    await connectToMongo()
    const deletedCollection = await CollectionModel.findByIdAndDelete(id)
    return deletedCollection?.toJSON() as CollectionEntity ?? null
  }

  return {
    find,
    findOneById,
    create,
    update,
    delete: deleteOne
  }
}
