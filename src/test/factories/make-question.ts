import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  return Question.create({
    authorId: new UniqueEntityId(),
    title: 'Example Question',
    slug: Slug.create('example-question'),
    content: 'Content Question',
    ...override,
  })
}
