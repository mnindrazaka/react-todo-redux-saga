import React, { Component } from 'react'
import {
  deleteTasks,
  fetchTasksRequest,
  createTasksRequest
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
  createTasksRequest: typeof createTasksRequest
  deleteTasks: typeof deleteTasks
}

type TodolistContainerProps = PropsFromState & PropsFromDispatch

class TodolistContainer extends Component<TodolistContainerProps> {
  render() {
    return <Todolist {...this.props} />
  }
}

const mapDispatchToProps = {
  createTasksRequest,
  deleteTasks,
  fetchTasksRequest
}

const mapStateToProps = (state: AppState) => ({
  tasks: getTasks(state.tasks),
  loading: getLoading(state.tasks),
  error: getError(state.tasks)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistContainer)
