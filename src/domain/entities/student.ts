import { randomUUID } from "node:crypto"
import {Entity} from "../../core/entities/entity";
import {Optional} from "../../core/types/optional";
import {UniqueEntityId} from "../../core/entities/unique-entity-id";

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId) {
    return new Student(props, id)
  }
}