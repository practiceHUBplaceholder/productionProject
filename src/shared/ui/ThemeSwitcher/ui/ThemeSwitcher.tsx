import cls from "./ThemezSwitcher.module.scss";

import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { ClassNames } from "shared/lib/classNames/classNames";

import LightIcon from "shared/assets/icons/sun-light.svg";
import DarkIcon from "shared/assets/icons/sun-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
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
