import { takeEvery, call, put } from 'redux-saga/effects';
import api from './api';
import * as actions from './actions';
import * as t from './actionTypes';

export function* register(action) {
  try {
    const result = yield call(api.register, action);
    yield put(actions.registerSuccess(result));
  } catch (error) {
    yield put(actions.registerError(error));
  }
}

/**
 * Redux Saga flow
 */
export function* watchRegisterFlow() {
  // Register flow
  yield takeEvery(t.REGISTER_REQUEST, register);
}

export default watchRegisterFlow;
