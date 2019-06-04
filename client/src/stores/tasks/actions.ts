import { TasksActionTypes } from './types'
import { Task } from '../../../../types'
import { action } from 'typesafe-actions'

export const fetchTasksRequest = () => action(TasksActionTypes.FETCH_REQUEST)

export const fetchTasksSuccess = (tasks: Task[]) =>
  action(TasksActionTypes.FETCH_SUCCESS, tasks)

export const fetchTasksError = (message: string) =>
  action(TasksActionTypes.FETCH_ERROR, message)

export const createTasks = (todo: Task) => action(TasksActionTypes.CREATE, todo)

export const deleteTasks = (index: number) =>
  action(TasksActionTypes.DELETE, index)
