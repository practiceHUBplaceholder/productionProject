/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  FUNKY = 'funky',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  S = 'small',
  M = 'medium',
  L = 'large',
  XL = 'Xlarge'
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_INVERTED = 'primaryInverted',
  SECONDARY_INVERTED = 'secondaryInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize
  color?: ButtonColor
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = ButtonTheme.CLEAR, square, size = ButtonSize.M, color, ...rest
}) => (
    <button
        type="button"
        className={ClassNames(
            cls.Button,
            {
                [cls.square]: square,
                [cls[color]]: color,
            },
            [className, cls[theme], cls[size]]
        )}
        {...rest}
    >
        {children}
    </button>
);
