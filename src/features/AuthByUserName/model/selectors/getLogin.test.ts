import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
    test('should return login selector', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'test',
                password: 'test',
                isLoading: false,
            },
        };
        expect(getLogin(state as StateSchema)).toEqual({
            username: 'test',
            password: 'test',
            isLoading: false,
        });
    });
});
