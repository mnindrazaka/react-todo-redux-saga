import { TodoActionTypes, TodoState } from './types'
import { Reducer } from 'redux'

const initialState: TodoState = {
  todos: []
}

export const todoReducer: Reducer<TodoState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TodoActionTypes.CREATE:
      return { todos: [...state.todos, action.payload] }
    default:
      return state
  }
}
