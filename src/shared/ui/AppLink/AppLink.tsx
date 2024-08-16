import cls from "./AppLink.module.scss";

import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ClassNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}) => {
  return (
    <Link
      className={ClassNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};
