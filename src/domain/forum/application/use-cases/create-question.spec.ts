import { expect, test } from 'vitest'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Title Question',
    content: 'Content Question',
  })

  expect(question.id).toBeTruthy()
})
