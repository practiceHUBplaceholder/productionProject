import { DeepPartial } from '@reduxjs/toolkit';
import { LoginActions, LoginReducer } from './LoginSlice';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('LoginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'test' };

        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('username')))
            .toEqual({ username: 'username' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'test' };

        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('password')))
            .toEqual({ password: 'password' });
    });
});
