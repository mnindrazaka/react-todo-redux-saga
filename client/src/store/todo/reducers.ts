import { TodoState, TodoActionTypes, CREATE_TODO } from './types'

const initialState: TodoState = {
  todos: []
}

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO:
      return { todos: [...state.todos, action.payload] }
    default:
      return state
  }
}
