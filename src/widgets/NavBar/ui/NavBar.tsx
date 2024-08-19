import cls from "./NavBar.module.scss";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ClassNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t("Main")}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
};
