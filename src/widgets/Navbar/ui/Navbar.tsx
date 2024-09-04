import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonColor } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = useCallback(() => setIsOpen((state) => !state), []);

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} onClick={onToggle} color={ButtonColor.PRIMARY_INVERTED}>
                {t('Sign-in')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggle}>
                333
                <Button onClick={onToggle}>333</Button>
                <Button onClick={onToggle}>333</Button>
                <Button onClick={onToggle}>333</Button>
                <input value={isOpen ? null : ''} />
            </Modal>
        </div>
    );
};
