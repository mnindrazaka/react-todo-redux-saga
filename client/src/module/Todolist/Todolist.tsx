import React, { Component } from 'react'
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik'
import {
  createTodo,
  deleteTodo,
  fetchRequestTodo
} from '../../store/todo/actions'
import { Todo } from '../../../../types'

interface TodolistProps {
  todos: Todo[]
  fetchRequestTodo: typeof fetchRequestTodo
  createTodo: typeof createTodo
  deleteTodo: typeof deleteTodo
}

interface TodolistFormValues {
  name: string
  description: string
  isDone: boolean
}

export default class Todolist extends Component<TodolistProps> {
  componentDidMount() {
    this.props.fetchRequestTodo()
  }

  createTodo = (
    values: TodolistFormValues,
    actions: FormikActions<TodolistFormValues>
  ) => {
    this.props.createTodo(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', description: '', isDone: false }}
          onSubmit={this.createTodo}
          render={(formikBag: FormikProps<TodolistFormValues>) => (
            <Form>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
              </label>

              <label>
                Description
                <Field
                  name="description"
                  type="text"
                  placeholder="Description"
                />
              </label>

              <label>
                Done
                <Field
                  name="isDone"
                  type="checkbox"
                  checked={formikBag.values.isDone}
                />
              </label>

              <button type="submit" disabled={formikBag.isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />

        <ol>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              <p>{todo.name}</p>
              <small>{todo.description}</small>
              <p>{todo.isDone ? 'selesai' : 'belum selesai'}</p>
              <button onClick={() => this.props.deleteTodo(index)}>
                Delete
              </button>
              <hr />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}
