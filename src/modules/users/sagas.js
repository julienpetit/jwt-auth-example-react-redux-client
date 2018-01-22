import { takeEvery, call, put, select } from 'redux-saga/effects';
import api from './api';
import * as t from './actionTypes';
import {
    fetchSuccess,
    fetchFailure,
    fetchListSuccess,
    fetchListFailure,
    updateSuccess,
    updateFailure,
} from './actions';

export function* getAllUsers(action) {
    try {
        const token = yield select(({ auth }) => auth.token);
        const result = yield call(api.getAll, action, token);
        yield put(fetchListSuccess(result));
    }
    catch (error) {
        yield put(fetchListFailure(error));
    }
}

export function* getUser(action) {
    try {
        const token = yield select(({ auth }) => auth.token);
        const loginResult = yield call(api.get, action, token);
        yield put(fetchSuccess(loginResult));
    }
    catch (error) {
        yield put(fetchFailure(error));
    }
}

export function* updateUser(action) {
    try {
        const token = yield select(({ auth }) => auth.token);
        const loginResult = yield call(api.update, action, token);
        yield put(updateSuccess(loginResult));
    }
    catch (error) {
        yield put(updateFailure(error));
    }
}

export function* watchLoginFlow() {
    yield takeEvery(t.FETCH_LIST_REQUEST, getAllUsers);
    yield takeEvery(t.FETCH_REQUEST, getUser);
    yield takeEvery(t.UPDATE_REQUEST, updateUser);
}

export default watchLoginFlow;