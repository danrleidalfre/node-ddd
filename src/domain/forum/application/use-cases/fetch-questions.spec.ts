import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionsRepository } from '@/test/repositories/in-memory-questions-repository'
import { FetchQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-questions'
import { makeQuestion } from '@/test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: FetchQuestionsUseCase

describe('Fetch Questions', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new FetchQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to fetch questions sorted by created', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 0, 5) }),
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 0, 1) }),
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 0, 10) }),
    )

    const { questions } = await sut.execute({
      page: 1,
    })

    expect(questions).toEqual([
      expect.objectContaining({ createdAt: new Date(2024, 0, 10) }),
      expect.objectContaining({ createdAt: new Date(2024, 0, 5) }),
      expect.objectContaining({ createdAt: new Date(2024, 0, 1) }),
    ])
  })

  it('should be able to fetch questions paginated', async () => {
    for (let i = 0; i < 22; i++) {
      await inMemoryQuestionsRepository.create(makeQuestion())
    }

    const { questions } = await sut.execute({
      page: 2,
    })

    expect(questions).toHaveLength(2)
  })
})