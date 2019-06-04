import React, { Component } from 'react'
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik'
import {
  deleteTasks,
  fetchTasksRequest,
  createTasksRequest
} from '../../stores/tasks/actions'
import { Task } from '../../../../types'

interface TodolistProps {
  tasks: Task[]
  loading: boolean
  error: string
  fetchTasksRequest: typeof fetchTasksRequest
  createTasksRequest: typeof createTasksRequest
  deleteTasks: typeof deleteTasks
}

interface TodolistFormValues {
  name: string
  description: string
  isDone: boolean
}

export default class Todolist extends Component<TodolistProps> {
  componentDidMount() {
    this.props.fetchTasksRequest()
  }

  createTasks = (
    values: TodolistFormValues,
    actions: FormikActions<TodolistFormValues>
  ) => {
    this.props.createTasksRequest(values)
    actions.resetForm()
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', description: '', isDone: false }}
          onSubmit={this.createTasks}
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

              <button type="submit" disabled={this.props.loading}>
                Submit
              </button>
            </Form>
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
                  <button onClick={() => this.props.deleteTasks(index)}>
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
