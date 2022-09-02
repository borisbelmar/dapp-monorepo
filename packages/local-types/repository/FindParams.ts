export interface FindParams {
  page?: number
  limit?: number
  orderBy?: string
  order?: 'asc' | 'desc'
  filters?: Record<string, string>
}