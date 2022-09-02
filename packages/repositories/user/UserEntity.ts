import type { BaseEntity } from 'local-types'

export interface UserEntity extends BaseEntity {
  firstName: string
  lastName: string
  email: string
  password: string
  wallets: string[]
}
