import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('translation');

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                    {t('Main')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
