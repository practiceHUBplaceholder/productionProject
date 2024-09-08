import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        className={ClassNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <LoginForm isOpen={isOpen} />
    </Modal>
);
