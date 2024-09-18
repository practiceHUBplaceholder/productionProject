import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ProfileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    profile: ProfileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (
    Story
) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
