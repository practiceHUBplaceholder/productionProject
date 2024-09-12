import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
    username: string;
    password: string;
}

enum loginErrors {
    INVALID = 'Invalid-username-or-password'
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {
    rejectValue: string;
}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('no data');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(UserActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(loginErrors.INVALID);
        }
    }
);
