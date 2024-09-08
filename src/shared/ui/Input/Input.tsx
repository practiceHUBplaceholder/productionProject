import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef
} from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum InputTheme {
    ANIMATED = 'animated'
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
    const {
        value, className, onChange, autoFocus, type = 'text', theme, placeholder, required, ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    });

    return (

        <div className={cls.InputWrapper}>
            <input
                onChange={onChangeHandler}
                value={value}
                type={type}
                placeholder={theme === InputTheme.ANIMATED ? null : placeholder}
                required={theme === InputTheme.ANIMATED || required}
                className={ClassNames(cls.Input, { [cls[theme]]: theme }, [className])}
                {...rest}
            />
            {theme === InputTheme.ANIMATED && <div className={cls.placeholder}>{placeholder}</div>}
        </div>
    );
});
