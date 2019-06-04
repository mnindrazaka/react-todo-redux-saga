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
    case TodoActionTypes.FETCH_SUCCESS:
      return Object.assign({}, { todos: action.payload })
    case TodoActionTypes.FETCH_REQUEST:
      return state
    case TodoActionTypes.FETCH_ERROR:
      return state
    case TodoActionTypes.CREATE:
      return { todos: [...state.todos, action.payload] }
    case TodoActionTypes.DELETE:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload)
      }
    default:
      return state
  }
}
