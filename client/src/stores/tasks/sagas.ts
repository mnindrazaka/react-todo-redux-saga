import { all, call, put, takeEvery, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import {
  fetchTasksSuccess,
  fetchTasksError,
  createTasksSuccess,
  createTasksError
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

function* watchFetchRequest() {
  yield takeEvery(TasksActionTypes.FETCH_REQUEST, handleFetch)
}

function* watchCreateRequest() {
  yield takeEvery(TasksActionTypes.CREATE_REQUEST, handleCreate)
}

function* tasksSaga() {
  yield all([fork(watchFetchRequest), fork(watchCreateRequest)])
}

export default tasksSaga
