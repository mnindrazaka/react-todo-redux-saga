import { TodoState } from './types'

export function getTodos(store: TodoState) {
  return store.todos
}
