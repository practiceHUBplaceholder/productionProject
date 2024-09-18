/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
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

export enum ButtonModal {
  FIRST = 'first',
  LAST = 'last'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  modal?: ButtonModal;
  children?: ReactNode;
}

export const Button = memo(({
    className, children, theme = ButtonTheme.CLEAR,
    modal,
    square, size = ButtonSize.M, color, disabled, ...rest
}: ButtonProps) => (
    <>
        {modal === ButtonModal.FIRST
        && <button type="button" className={cls.fakeBtn} /> }
        <button
            type="button"
            disabled={disabled}
            className={ClassNames(
                cls.Button,
                {
                    [cls.square]: square,
                    [cls[color]]: color,
                    [cls.disabled]: disabled,
                },
                [className, cls[theme], cls[size]]
            )}
            {...rest}
        >
            {children}
        </button>
        {modal === ButtonModal.LAST
        && <button type="button" className={cls.fakeBtn} /> }
    </>
));
