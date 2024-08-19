import cls from "./SideBar.module.scss";

import { FC, useState } from "react";
import { ClassNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };
  return (
    <div
      className={ClassNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
