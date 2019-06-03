import { TodoActionTypes, CREATE_TODO } from './types'
import { Todo } from '../../../../types'

export function createTodo(todo: Todo): TodoActionTypes {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}
