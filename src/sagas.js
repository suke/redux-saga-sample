import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as Api from './Api'
import { successGetRepository } from './modules/Github'

function* getRepository() {
  const { result, err } = yield call(Api.getRepository)
  if (result && !err) {
    yield put(successGetRepository(result.data))
  }
}

function* watchGetRepository() {
  yield takeEvery('GETREPOSITORY', getRepository)
}

export default function* rootSaga() {
  yield all([watchGetRepository()])
}
