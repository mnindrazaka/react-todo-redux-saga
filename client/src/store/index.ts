import { combineReducers } from 'redux'
import { todoReducer } from './todo/reducers'

export const rootReducer = combineReducers({
  todo: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>
