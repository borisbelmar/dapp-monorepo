import { connectToMongo } from "backend-utils";
import { Repository } from "local-types";
import { UserEntity } from "./UserEntity";
import UserModel from "./UserModel";

export default function getUserRepository() : Repository<UserEntity> {
  const find = async (findParams: any): Promise<UserEntity[]> => {
    await connectToMongo()
    const users = await UserModel.find(findParams);
    return users.map((user) => user.toJSON());
  };

  const findOneById = async (id: string): Promise<UserEntity | null> => {
    await connectToMongo()
    const user = await UserModel.findById(id);
    return user?.toJSON() as UserEntity ?? null;
  };

  const create = async (user: UserEntity): Promise<UserEntity> => {
    await connectToMongo()
    const createdUser = await UserModel.create(user);
    return createdUser.toJSON() as UserEntity;
  };

  const update = async (id: string, user: UserEntity): Promise<UserEntity | null> => {
    await connectToMongo()
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
    return updatedUser?.toJSON() as UserEntity ?? null;
  };

  const deleteOne = async (id: string): Promise<UserEntity | null> => {
    await connectToMongo()
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return deletedUser?.toJSON() as UserEntity ?? null;
  };

  return {
    find,
    findOneById,
    create,
    update,
    delete: deleteOne
  }
}
