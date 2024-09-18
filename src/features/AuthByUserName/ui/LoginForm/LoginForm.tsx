import {
    memo, useCallback, useEffect
} from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonModal } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { LoginActions } from '../../model/slice/LoginSlice';
import { getLogin } from '../../model/selectors/getLogin';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLogin);

    const { t } = useTranslation('translation');

    const changeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUsername(value));
    }, [dispatch]);

    const changePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value));
    }, [dispatch]);

    const loginClear = useCallback(() => {
        dispatch(LoginActions.loginClear());
    }, [dispatch]);

    const loginSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (isOpen === false && (username || password)) {
            timer = setTimeout(() => {
                loginClear();
            }, 100);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isOpen, loginClear, username, password]);

    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.title} title={t('Authorization-form')} />
            {error && (
                <Text
                    className={cls.error}
                    text={t(error)}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                className={cls.input}
                value={username}
                onChange={changeUsername}
                placeholder={t('Username')}
                theme={InputTheme.ANIMATED}
            />
            <Input
                className={cls.input}
                value={password}
                onChange={changePassword}
                placeholder={t('Password')}
                theme={InputTheme.ANIMATED}
            />
            <Button
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={loginSubmit}
                modal={ButtonModal.LAST}
            >
                {t('Sign-in')}
            </Button>
        </div>
    );
});
