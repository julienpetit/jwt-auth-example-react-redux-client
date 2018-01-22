import * as t from './actionTypes';

export const fetchRequest = (payload) => ({
    type: t.FETCH_REQUEST,
    payload,
});

export const fetchSuccess = (payload) => ({
    type: t.FETCH_SUCCESS,
    payload,
});

export const fetchFailure = (payload) => ({
    type: t.FETCH_FAILURE,
    payload,
});

export const fetchListRequest = (payload) => ({
    type: t.FETCH_LIST_REQUEST,
    payload,
});

export const fetchListSuccess = (payload) => ({
    type: t.FETCH_LIST_SUCCESS,
    payload,
});

export const fetchListFailure = (payload) => ({
    type: t.FETCH_LIST_FAILURE,
    payload,
});

export const updateRequest = (payload) => ({
    type: t.UPDATE_REQUEST,
    payload,
});

export const updateSuccess = (payload) => ({
    type: t.UPDATE_SUCCESS,
    payload,
});

export const updateFailure = (payload) => ({
    type: t.UPDATE_FAILURE,
    payload,
});