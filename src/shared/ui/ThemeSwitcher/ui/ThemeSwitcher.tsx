import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/sun-light.svg';
import DarkIcon from 'shared/assets/icons/sun-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={ClassNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? (
                <DarkIcon className={cls.icon} />
            ) : (
                <LightIcon className={cls.icon} />
            )}
        </Button>
    );
};
