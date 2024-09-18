import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonColor } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { UserActions, getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
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
});
