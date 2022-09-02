import type { BaseEntity } from './BaseEntity'
import type { FindParams } from './FindParams'

export interface Repository<Entity extends BaseEntity> {
  find(findParams: FindParams): Promise<Entity[]>
  findOneById(id: string): Promise<Entity | null>
  create(entity: Entity): Promise<Entity>
  update(id: string, entity: Entity): Promise<Entity | null>
  delete(id: string): Promise<Entity | null>
}
