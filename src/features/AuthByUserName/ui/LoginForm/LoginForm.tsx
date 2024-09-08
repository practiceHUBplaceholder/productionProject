import {
    FC, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm:FC<LoginFormProps> = ({ className, isOpen }) => {
    const { t } = useTranslation('translation');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (isOpen === false) {
            timer = setTimeout(() => {
                setUsername('');
                setPassword('');
            }, 100);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isOpen]);

    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                value={username}
                onChange={(val: string) => setUsername(val)}
                placeholder={t('Username')}
                theme={InputTheme.ANIMATED}
            />
            <Input
                className={cls.input}
                value={password}
                onChange={(val: string) => setPassword(val)}
                placeholder={t('Password')}
                theme={InputTheme.ANIMATED}
            />
            <Button className={cls.loginBtn}>{t('Sign-in')}</Button>
        </div>
    );
};
