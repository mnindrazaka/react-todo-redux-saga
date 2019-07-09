import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

import * as yup from 'yup'
import {
  deleteTasksRequest,
  fetchTasksRequest,
  createTasksRequest
} from '../../stores/tasks/actions'
import { Task } from '../../../../types'
import { setIn, FormApi } from 'final-form'

interface TodolistProps {
  tasks: Task[]
  loading: boolean
  error: string
  fetchTasksRequest: typeof fetchTasksRequest
  createTasksRequest: typeof createTasksRequest
  deleteTasksRequest: typeof deleteTasksRequest
}

interface TodolistFormValues {
  name: string
  description: string
  isDone: boolean
}

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required()
})

export default class Todolist extends Component<TodolistProps> {
  componentDidMount() {
    this.props.fetchTasksRequest()
  }

  createTasks = (
    values: TodolistFormValues,
    form: FormApi<TodolistFormValues>
  ) => {
    this.props.createTasksRequest(values)
    setTimeout(form.reset)
  }

  render() {
    return (
      <div>
        <Form<TodolistFormValues>
          initialValues={{ name: '', description: '', isDone: false }}
          onSubmit={this.createTasks}
          validate={async values => {
            try {
              await schema.validate(values, { abortEarly: false })
            } catch (e) {
              return e.inner.reduce((errors: any, error: any) => {
                return setIn(errors, error.path, error.message)
              }, {})
            }
          }}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field name="name">
                  {({ input, meta }) => (
                    <div>
                      <label>Name</label>
                      <input type="text" {...input} placeholder="Name" />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>

              <div>
                <Field name="description">
                  {({ input, meta }) => (
                    <div>
                      <label>Description</label>
                      <input type="text" {...input} placeholder="Description" />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>

              <div>
                <label>
                  Done
                  <Field
                    name="isDone"
                    component="input"
                    type="checkbox"
                    checked={values.isDone}
                  />
                </label>
              </div>

              <button type="submit" disabled={this.props.loading}>
                Submit
              </button>
            </form>
          )}
        />

        {this.props.loading ? (
          <p>loading</p>
        ) : (
          <>
            {this.props.error}
            <ol>
              {this.props.tasks.map((task, index) => (
                <li key={index}>
                  <p>{task.name}</p>
                  <small>{task.description}</small>
                  <p>{task.isDone ? 'selesai' : 'belum selesai'}</p>
                  <button onClick={() => this.props.deleteTasksRequest(index)}>
                    Delete
                  </button>
                  <hr />
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    )
  }
}
