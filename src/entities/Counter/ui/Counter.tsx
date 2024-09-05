import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {

}

export const Counter:FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div data-testid="Counter">
            <h1 data-testid="Counter-title">{counterValue}</h1>
            <Button data-testid="Counter-inc" theme={ButtonTheme.OUTLINE} onClick={increment}>
                +
            </Button>
            <Button data-testid="Counter-dec" theme={ButtonTheme.OUTLINE} onClick={decrement}>
                -
            </Button>
        </div>
    );
};
