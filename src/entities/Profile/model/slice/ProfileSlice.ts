import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        setAuthData: (state) => {

        },
    },
});

export const { actions: ProfileActions, reducer: ProfileReducer } = ProfileSlice;
