import { FC, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation('translation');

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
                theme={ThemeButton.CLEAR}
                data-testid="Sidebar-toggle"
            >
                {collapsed ? t('Open') : t('Close')}
            </Button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
