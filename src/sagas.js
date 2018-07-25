import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import * as Api from './Api'
import { successGetRepository } from './modules/Github'

function* getRepository(action) {
  const { name } = action
  const { result, err } = yield call(Api.getRepository, name)
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
