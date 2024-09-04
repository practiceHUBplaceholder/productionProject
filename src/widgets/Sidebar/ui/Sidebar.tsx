import { FC, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
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
                theme={ButtonTheme.CLEAR}
                data-testid="Sidebar-toggle"
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} className={cls.item} theme={AppLinkTheme.SECONDARY}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.langSwitcher} />
                <ThemeSwitcher className={cls.themeSwitcher} />
            </div>
        </div>
    );
};
