import { memo, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed((state) => !state);
    };
    return (
        <div
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="Sidebar"
        >
            <Button
                onClick={onToggle}
                className={cls.toggle}
                theme={ButtonTheme.CLEAR}
                data-testid="Sidebar-toggle"
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.langSwitcher} />
                <ThemeSwitcher className={cls.themeSwitcher} />
            </div>
        </div>
    );
});
