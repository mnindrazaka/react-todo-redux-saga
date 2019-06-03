import React, { Component } from 'react'
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik'
import './App.css'

import { AppState } from './store'
import { createTodo } from './store/todo/actions'
import { connect } from 'react-redux'
import { Todo } from '../../types'

interface AppProps {
  createTodo: typeof createTodo
  todos: Todo[]
}

interface TodoFormValues {
  name: string
  description: string
  isDone: boolean
}

class App extends Component<AppProps> {
  createTodo = (
    values: TodoFormValues,
    actions: FormikActions<TodoFormValues>
  ) => {
    this.props.createTodo(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{ name: '', description: '', isDone: false }}
          onSubmit={this.createTodo}
          render={(formikBag: FormikProps<TodoFormValues>) => (
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
              <hr />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

const mapDispatchToProps = { createTodo }

const mapStateToProps = (state: AppState) => ({
  todos: state.todo.todos
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
