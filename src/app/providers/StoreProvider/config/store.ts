import { DeepPartial, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>(
        {
            reducer: reducerManager.reduce,
            devTools: __IS__DEV__,
            preloadedState: initialState,
        }
    );

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
