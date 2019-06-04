import { all, call, put, takeEvery, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import { fetchSuccessTodo } from './actions'
import { TodoActionTypes } from './types'

const API_ENDPOINT = 'http://localhost:3000'

function* handleFetch() {
  const res = yield call(callApi, 'get', API_ENDPOINT, '/todos')
  yield put(fetchSuccessTodo(res))
}

function* watchFetchRequest() {
  yield takeEvery(TodoActionTypes.FETCH_REQUEST, handleFetch)
}

function* todoSaga() {
  yield all([fork(watchFetchRequest)])
}

export default todoSaga
