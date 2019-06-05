import { TasksActionTypes, TasksState } from './types'
import { Reducer, combineReducers } from 'redux'

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: ''
}

const tasks: Reducer<TasksState['tasks']> = (
  state = initialState.tasks,
  action
) => {
  switch (action.type) {
    case TasksActionTypes.FETCH_SUCCESS:
      return action.payload
    case TasksActionTypes.CREATE_SUCCESS:
      return [...state, action.payload]
    case TasksActionTypes.DELETE_SUCCESS:
      return state.filter((task, index) => index !== action.payload)
    default:
      return state
  }
}

const loading: Reducer<TasksState['loading']> = (
  state = initialState.loading,
  action
) => {
  switch (action.type) {
    case TasksActionTypes.FETCH_REQUEST:
      return true
    case TasksActionTypes.FETCH_SUCCESS:
      return false
    case TasksActionTypes.FETCH_ERROR:
      return false
    case TasksActionTypes.CREATE_REQUEST:
      return true
    case TasksActionTypes.CREATE_SUCCESS:
      return false
    case TasksActionTypes.CREATE_ERROR:
      return false
    case TasksActionTypes.DELETE_REQUEST:
      return true
    case TasksActionTypes.DELETE_SUCCESS:
      return false
    case TasksActionTypes.DELETE_ERROR:
      return false
    default:
      return state
  }
}

const error: Reducer<TasksState['error']> = (
  state = initialState.error,
  action
) => {
  switch (action.type) {
    case TasksActionTypes.FETCH_ERROR:
      return action.payload
    case TasksActionTypes.CREATE_ERROR:
      return action.payload
    case TasksActionTypes.DELETE_ERROR:
      return action.payload
    default:
      return state
  }
}

export const tasksReducer = combineReducers<TasksState>({
  tasks,
  loading,
  error
})
