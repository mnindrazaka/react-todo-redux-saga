import { Todo } from '../../../../types'

export interface TodoState {
  todos: Todo[]
}

export enum TodoActionTypes {
  FETCH_REQUEST = '@@todo/FETCH_REQUEST',
  FETCH_SUCCESS = '@@todo/FETCH_SUCCESS',
  FETCH_ERROR = '@@todo/FETCH_ERROR',
  CREATE = '@@todo/CREATE',
  DELETE = '@@todo/DELETE'
}
