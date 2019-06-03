import { Todo } from '../../../../types'

export interface TodoState {
  todos: Todo[]
}

export const CREATE_TODO = 'CREATE_TODO'

interface CreateTodoAction {
  type: string
  payload: Todo
}

export type TodoActionTypes = CreateTodoAction
