import { memo } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo(({
    className, text, title, theme,
}: TextProps) => (
    <div className={ClassNames(cls.Text, { [cls[theme]]: theme }, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
