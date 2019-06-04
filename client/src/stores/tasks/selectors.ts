import { TasksState } from './types'

export function getTasks(store: TasksState) {
  return store.tasks
}

export function getLoading(store: TasksState) {
  return store.loading
}

export function getError(store: TasksState) {
  return store.error
}
