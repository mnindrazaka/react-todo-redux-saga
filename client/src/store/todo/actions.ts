import { TodoActionTypes } from './types'
import { Todo } from '../../../../types'
import { action } from 'typesafe-actions'

export const createTodo = (todo: Todo) => action(TodoActionTypes.CREATE, todo)
