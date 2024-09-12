import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
};
export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: () => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            return initialState;
        },
    },
});

export const { actions: UserActions, reducer: UserReducer } = UserSlice;
