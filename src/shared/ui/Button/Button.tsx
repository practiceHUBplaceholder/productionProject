import { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = '', ...rest
}) => (
    <button type="button" className={ClassNames(cls.Button, {}, [className, cls[theme]])} {...rest}>
        {children}
    </button>
);
