import * as actions from '../actions';
import * as t from '../actionTypes';

describe('actions', () => {
    it('should create an action to request a login', () => {
        const expectedAction = {
            type: t.LOGIN_REQUEST,
            payload: {
                username: 'andy',
                password: 'serkys'
            },
        };
        expect(actions.loginRequest('andy', 'serkys')).toEqual(expectedAction);
    });

    it('should create an action to success a login', () => {
        const token = 'A42DJEICNF2';
        const tokenData = {};

        const expectedAction = {
            type: t.LOGIN_SUCCESS,
            payload: {
                token: 'A42DJEICNF2',
                tokenData: {},
            },
        };
        expect(actions.loginSuccess(token, tokenData)).toEqual(expectedAction);
    });

    it('should create an action to fail a login', () => {
        const payload = {
            message: 'Wrong credentials',
        };

        const expectedAction = {
            type: t.LOGIN_FAILURE,
            payload: {
                message: 'Wrong credentials',
            },
        };
        expect(actions.loginError(payload)).toEqual(expectedAction);
    });

    it('should create an action to request a new token', () => {
        const payload = {};

        const expectedAction = {
            type: t.LOGIN_REFRESH_TOKEN_REQUEST,
            payload: {},
        };
        expect(actions.loginRefreshTokenRequest(payload)).toEqual(expectedAction);
    });

    it('should create an action to success a new token', () => {
        const token = 'A42DJEICNF2';
        const tokenData = {};

        const expectedAction = {
            type: t.LOGIN_REFRESH_TOKEN_SUCCESS,
            payload: {
                token: 'A42DJEICNF2',
                tokenData: {},
            },
        };
        expect(actions.loginRefreshTokenSuccess(token, tokenData)).toEqual(expectedAction);
    });

    it('should create an action to fail a new token', () => {
        const payload = {};

        const expectedAction = {
            type: t.LOGIN_REFRESH_TOKEN_FAILURE,
            payload: {},
        };
        expect(actions.loginRefreshTokenError(payload)).toEqual(expectedAction);
    });

    it('should create an action to request a logout', () => {

        const expectedAction = {
            type: t.LOGOUT_REQUEST,
        };
        expect(actions.logoutRequest()).toEqual(expectedAction);
    });

    it('should create an action to request a logout', () => {

        const expectedAction = {
            type: t.LOGOUT_SUCCESS,
        };
        expect(actions.logoutSuccess()).toEqual(expectedAction);
    });
});
