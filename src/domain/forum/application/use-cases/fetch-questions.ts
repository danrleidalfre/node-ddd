import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

interface FetchQuestionsUseCaseRequest {
  page: number
}

interface FetchQuestionsUseCaseResponse {
  questions: Question[]
}

export class FetchQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchQuestionsUseCaseRequest): Promise<FetchQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findMany({ page })

    return { questions }
  }
}
