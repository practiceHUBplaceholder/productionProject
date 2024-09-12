import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };

    return configureStore<StateSchema>(
        {
            reducer: rootReducer,
            devTools: __IS__DEV__,
            preloadedState: initialState,
        }
    );
}
