import type { BaseEntity } from 'local-types'

export interface CollectionEntity extends BaseEntity {
  name: string
  description: string
  image: string
  symbol: string
  owner: string
}
