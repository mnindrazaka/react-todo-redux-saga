import { all, call, put, takeEvery, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import { fetchTasksSuccess, fetchTasksError } from './actions'
import { TasksActionTypes } from './types'

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

function* watchFetchRequest() {
  yield takeEvery(TasksActionTypes.FETCH_REQUEST, handleFetch)
}

function* tasksSaga() {
  yield all([fork(watchFetchRequest)])
}

export default tasksSaga
