import { Task } from '../../../../types'

export interface TasksState {
  tasks: Task[]
  loading: boolean
  error: string
}

export enum TasksActionTypes {
  FETCH_REQUEST = '@@tasks/FETCH_REQUEST',
  FETCH_SUCCESS = '@@tasks/FETCH_SUCCESS',
  FETCH_ERROR = '@@tasks/FETCH_ERROR',

  CREATE_REQUEST = '@@tasks/CREATE_REQUEST',
  CREATE_SUCCESS = '@@tasks/CREATE_SUCCESS',
  CREATE_ERROR = '@@tasks/CREATE_ERROR',

  DELETE = '@@tasks/DELETE'
}
