import React, { Component } from 'react'
import {
  createTodo,
  deleteTodo,
  fetchRequestTodo
} from '../../store/todo/actions'
import { Todo } from '../../../../types'
import { AppState } from '../../store'
import { getTodos } from '../../store/todo/selectors'
import { connect } from 'react-redux'
import Todolist from './Todolist'

interface PropsFromState {
  todos: Todo[]
}

interface PropsFromDispatch {
  fetchRequestTodo: typeof fetchRequestTodo
  createTodo: typeof createTodo
  deleteTodo: typeof deleteTodo
}

type TodolistContainerProps = PropsFromState & PropsFromDispatch

class TodolistContainer extends Component<TodolistContainerProps> {
  render() {
    return <Todolist {...this.props} />
  }
}

const mapDispatchToProps = { createTodo, deleteTodo, fetchRequestTodo }

const mapStateToProps = (state: AppState) => ({
  todos: getTodos(state.todo)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistContainer)
