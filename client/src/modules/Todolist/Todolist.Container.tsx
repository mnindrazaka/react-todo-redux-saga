import React, { Component } from 'react'
import {
  createTasks,
  deleteTasks,
  fetchTasksRequest
} from '../../stores/tasks/actions'
import { Task } from '../../../../types'
import { AppState } from '../../stores'
import { getTasks, getLoading, getError } from '../../stores/tasks/selectors'
import { connect } from 'react-redux'
import Todolist from './Todolist'

interface PropsFromState {
  tasks: Task[]
  loading: boolean
  error: string
}

interface PropsFromDispatch {
  fetchTasksRequest: typeof fetchTasksRequest
  createTasks: typeof createTasks
  deleteTasks: typeof deleteTasks
}

type TodolistContainerProps = PropsFromState & PropsFromDispatch

class TodolistContainer extends Component<TodolistContainerProps> {
  render() {
    return <Todolist {...this.props} />
  }
}

const mapDispatchToProps = { createTasks, deleteTasks, fetchTasksRequest }

const mapStateToProps = (state: AppState) => ({
  tasks: getTasks(state.tasks),
  loading: getLoading(state.tasks),
  error: getError(state.tasks)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistContainer)
