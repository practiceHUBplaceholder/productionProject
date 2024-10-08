import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
}: AppLinkProps) => (
    <Link
        className={ClassNames(cls.AppLink, {}, [className, cls[theme]])}
        to={to}
        {...rest}
    >
        {children}
    </Link>
));
