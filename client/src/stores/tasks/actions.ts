import { TasksActionTypes } from './types'
import { Task } from '../../../../types'
import { action } from 'typesafe-actions'

export const fetchTasksRequest = () => action(TasksActionTypes.FETCH_REQUEST)

export const fetchTasksSuccess = (tasks: Task[]) =>
  action(TasksActionTypes.FETCH_SUCCESS, tasks)

export const fetchTasksError = (message: string) =>
  action(TasksActionTypes.FETCH_ERROR, message)

export const createTasksRequest = (todo: Task) =>
  action(TasksActionTypes.CREATE_REQUEST, todo)

export const createTasksSuccess = (todo: Task) =>
  action(TasksActionTypes.CREATE_SUCCESS, todo)

export const createTasksError = (message: string) =>
  action(TasksActionTypes.CREATE_SUCCESS, message)

export const deleteTasksRequest = (index: number) =>
  action(TasksActionTypes.DELETE_REQUEST, index)

export const deleteTasksSuccess = (index: number) =>
  action(TasksActionTypes.DELETE_SUCCESS, index)

export const deleteTasksError = (message: string) =>
  action(TasksActionTypes.DELETE_ERROR, message)
