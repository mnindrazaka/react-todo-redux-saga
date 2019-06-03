import { Todo } from '../../../../types'

export interface TodoState {
  todos: Todo[]
}

export enum TodoActionTypes {
  CREATE = '@@todo/CREATE'
}
