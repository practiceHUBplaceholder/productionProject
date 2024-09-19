import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUserName';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore(
        {
            reducer: reducerManager.reduce,
            devTools: __IS__DEV__,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
        }
    );

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
