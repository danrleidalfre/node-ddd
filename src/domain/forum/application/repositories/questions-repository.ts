import { Question } from '@/domain/forum/enterprise/entities/question'
import { PaginationParams } from '@/core/repositories/pagination-params'

export interface QuestionsRepository {
  findById(id: string): Promise<Question | null>

  findBySlug(slug: string): Promise<Question | null>

  findMany(params: PaginationParams): Promise<Question[]>

  create(question: Question): Promise<Question>

  save(question: Question): Promise<Question>

  delete(question: Question): Promise<void>
}
