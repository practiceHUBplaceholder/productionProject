import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('should return counter selector', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    username: 'test',
                    id: '1',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ username: 'test', id: '1' });
    });
});
