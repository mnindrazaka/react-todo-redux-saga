import { combineReducers } from 'redux'
import { tasksReducer } from './tasks/reducers'

export const rootReducer = combineReducers({
  tasks: tasksReducer
})
