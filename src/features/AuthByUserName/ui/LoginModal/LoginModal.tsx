import { FC, useEffect } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    const authData = useSelector(getUserAuthData);
    useEffect(() => {
        if (authData) {
            onClose();
        }
    }, [authData, onClose]);

    return (
        <Modal
            className={ClassNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm isOpen={isOpen} />
        </Modal>
    );
};
