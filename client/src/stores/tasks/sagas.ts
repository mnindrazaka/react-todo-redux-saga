import { all, call, put, takeEvery, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import {
  fetchTasksSuccess,
  fetchTasksError,
  createTasksSuccess,
  createTasksError,
  deleteTasksSuccess,
  deleteTasksError
} from './actions'
import { TasksActionTypes } from './types'
import { AnyAction } from 'redux'

const API_ENDPOINT = 'http://localhost:3000'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/tasks')
    yield put(fetchTasksSuccess(res))
  } catch (error) {
    if (error instanceof Error) yield put(fetchTasksError(error.message))
    else yield put(fetchTasksError('unknown error'))
  }
}

function* handleCreate(action: AnyAction) {
  try {
    const res = yield call(
      callApi,
      'post',
      API_ENDPOINT,
      '/tasks',
      action.payload
    )
    yield put(createTasksSuccess(res))
  } catch (error) {
    if (error instanceof Error) yield put(createTasksError(error.message))
    else yield put(createTasksError('unknown error'))
  }
}

function* handleDelete(action: AnyAction) {
  try {
    yield call(callApi, 'delete', API_ENDPOINT, `/tasks/${action.payload}`)
    yield put(deleteTasksSuccess(action.payload))
  } catch (error) {
    if (error instanceof Error) yield put(deleteTasksError(error.message))
    else yield put(deleteTasksError('unknown error'))
  }
}

function* watchFetchRequest() {
  yield takeEvery(TasksActionTypes.FETCH_REQUEST, handleFetch)
}

function* watchCreateRequest() {
  yield takeEvery(TasksActionTypes.CREATE_REQUEST, handleCreate)
}

function* watchDeleteRequest() {
  yield takeEvery(TasksActionTypes.DELETE_REQUEST, handleDelete)
}

function* tasksSaga() {
  yield all([
    fork(watchFetchRequest),
    fork(watchCreateRequest),
    fork(watchDeleteRequest)
  ])
}

export default tasksSaga
