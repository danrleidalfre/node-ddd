import { UniqueEntityId } from './unique-entity-id'

export class Entity<Props> {
  protected props: Props
  private readonly _id: UniqueEntityId

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }

  get id() {
    return this._id
  }
}
