import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed?: boolean;
    theme?: AppLinkTheme;
}

export const SidebarItem = memo(({ item, collapsed, theme }: SidebarItemProps) => {
    const { t } = useTranslation('translation');
    return (
        <AppLink
            to={item.path}
            className={ClassNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            theme={theme || AppLinkTheme.SECONDARY}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
