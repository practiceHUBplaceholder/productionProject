import { CounterActions, CounterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice', () => {
    test('Counter decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(CounterReducer(state, CounterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('Counter increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(CounterReducer(state, CounterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('Counter with empty state', () => {
        expect(CounterReducer(undefined, CounterActions.increment()))
            .toEqual({ value: 1 });
    });
});
