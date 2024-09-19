import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export enum loginErrors {
    INVALID = 'Invalid-username-or-password'
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(UserActions.setAuthData(response.data));

            extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(loginErrors.INVALID);
        }
    }
);
