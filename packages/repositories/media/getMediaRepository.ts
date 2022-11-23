import { connectToMongo } from 'backend-utils'
import { Repository } from 'local-types'
import { MediaEntity } from './MediaEntity'
import MediaModel from './MediaModel'

export default function getMediaRepository (): Repository<MediaEntity> {
  const find = async (findParams: any): Promise<MediaEntity[]> => {
    await connectToMongo()
    const Medias = await MediaModel.find(findParams)
    return Medias.map((Media) => Media.toJSON())
  }

  const findOneById = async (id: string): Promise<MediaEntity | null> => {
    await connectToMongo()
    const Media = await MediaModel.findById(id)
    return Media?.toJSON() as MediaEntity ?? null
  }

  const create = async (Media: MediaEntity): Promise<MediaEntity> => {
    await connectToMongo()
    const createdMedia = await MediaModel.create(Media)
    return createdMedia.toJSON() as MediaEntity
  }

  const update = async (id: string, Media: MediaEntity): Promise<MediaEntity | null> => {
    await connectToMongo()
    const updatedMedia = await MediaModel.findByIdAndUpdate(id, Media, { new: true })
    return updatedMedia?.toJSON() as MediaEntity ?? null
  }

  const deleteOne = async (id: string): Promise<MediaEntity | null> => {
    await connectToMongo()
    const deletedMedia = await MediaModel.findByIdAndDelete(id)
    return deletedMedia?.toJSON() as MediaEntity ?? null
  }

  return {
    find,
    findOneById,
    create,
    update,
    delete: deleteOne
  }
}
