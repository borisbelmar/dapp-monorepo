import type { BaseEntity } from 'local-types'

export interface MediaEntity extends BaseEntity {
  name: string
  video?: string
  image: string
}
