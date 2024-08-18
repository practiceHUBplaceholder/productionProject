import cls from "./NavBar.module.scss";

import { FC } from "react";
import { ClassNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={ClassNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
