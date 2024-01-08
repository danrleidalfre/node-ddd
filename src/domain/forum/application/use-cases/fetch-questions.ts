import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Either, right } from '@/core/either'

interface FetchQuestionsUseCaseRequest {
  page: number
}

type FetchQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

export class FetchQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchQuestionsUseCaseRequest): Promise<FetchQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findMany({ page })

    return right({ questions })
  }
}
