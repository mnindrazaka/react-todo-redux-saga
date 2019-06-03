import React, { Component } from 'react'
import { Formik, FormikActions, FormikProps, Form, Field } from 'formik'
import axios from 'axios'
import './App.css'

interface Todo {
  name: string
  description: string
  isDone: boolean
}

interface TodoFormValues {
  name: string
  description: string
  isDone: boolean
}

interface State {
  todos: Todo[]
}

class App extends Component<{}, State> {
  public state = {
    todos: [] as Todo[]
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos = () => {
    axios.get('http://localhost:3000/todos').then(response => {
      this.setState({ todos: response.data })
    })
  }

  createTodo = (
    values: TodoFormValues,
    actions: FormikActions<TodoFormValues>
  ) => {
    axios
      .post('http://localhost:3000/todos', values)
      .then(this.getTodos)
      .finally(() => {
        actions.setSubmitting(false)
      })
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
                <Field name="isDone" type="checkbox" />
              </label>

              <button type="submit" disabled={formikBag.isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />

        <ol>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default App
