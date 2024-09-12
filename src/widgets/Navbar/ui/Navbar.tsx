import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonColor } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, getUserAuthData } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onCloseAuth = useCallback(() => setIsAuthOpen(false), []);
    const onOpenAuth = useCallback(() => setIsAuthOpen(true), []);
    const onLogOut = useCallback(() => dispatch(UserActions.logout()), [dispatch]);

    if (authData) {
        return (
            <div className={ClassNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    onClick={onLogOut}
                    color={ButtonColor.PRIMARY_INVERTED}
                >
                    {t('Log-out')}
                </Button>
                <LoginModal isOpen={isAuthOpen} onClose={onCloseAuth} />
            </div>
        );
    }
    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                onClick={onOpenAuth}
                color={ButtonColor.PRIMARY_INVERTED}
            >
                {t('Sign-in')}
            </Button>
            <LoginModal isOpen={isAuthOpen} onClose={onCloseAuth} />
        </div>
    );
};
