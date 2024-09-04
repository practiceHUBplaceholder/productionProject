import {
    FC, KeyboardEvent, ReactNode, useEffect, useRef
} from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    portal?: HTMLElement
}

export const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose, portal,
}) => {
    const overlayRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const focusable = overlayRef.current.querySelectorAll('input,button,select,textarea');
        if (isOpen) {
            overlayRef.current.focus();
            focusable.forEach((item: HTMLElement) => item.setAttribute('tabIndex', '0'));
        } else {
            focusable.forEach((item: HTMLElement) => item.setAttribute('tabIndex', '-1'));
        }
    }, [isOpen]);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape' && isOpen) {
            onClose();
        }
        if (e.key === 'Tab' && isOpen) {
            const focusable = overlayRef.current.querySelectorAll('input,button,select,textarea');

            if (focusable.length) {
                const first = focusable[0] as HTMLElement;
                const last = focusable[focusable.length - 1] as HTMLElement;
                const shift = e.shiftKey;
                if (shift) {
                    if (e.target === first) { // shift-tab pressed on first input in dialog
                        last.focus();
                        e.preventDefault();
                    }
                } else if (e.target === last) { // tab pressed on last input in dialog
                    first.focus();
                    e.preventDefault();
                }
            } else {
                onClose();
            }
        }
    };

    return (
        <Portal element={portal}>
            <div
                className={ClassNames(
                    cls.Modal,
                    { [cls.opened]: isOpen },
                    ['app', theme, className]
                )}
            >
                <div
                    role="presentation"
                    ref={overlayRef}
                    className={cls.overlay}
                    tabIndex={-1}
                    onClick={(e) => {
                        if (e.currentTarget === e.target) {
                            onClose();
                        }
                    }}
                    onKeyDown={(e) => {
                        handleKeyDown(e);
                    }}
                >
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
