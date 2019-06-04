import { TodoActionTypes } from './types'
import { Todo } from '../../../../types'
import { action } from 'typesafe-actions'

export const fetchRequestTodo = () => action(TodoActionTypes.FETCH_REQUEST)

export const fetchSuccessTodo = (todos: Todo[]) =>
  action(TodoActionTypes.FETCH_SUCCESS, todos)

export const fetchErrorTodo = (message: string) =>
  action(TodoActionTypes.FETCH_ERROR, message)

export const createTodo = (todo: Todo) => action(TodoActionTypes.CREATE, todo)

export const deleteTodo = (index: number) =>
  action(TodoActionTypes.DELETE, index)
