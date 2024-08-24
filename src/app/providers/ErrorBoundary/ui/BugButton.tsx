import { FC, useEffect, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестироваания ошибок

export const BugButton:FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error('Test Error');
        }
    }, [error]);

    return (
        <Button
            className={ClassNames('', {}, [className])}
            onClick={() => setError(true)}
        // eslint-disable-next-line i18next/no-literal-string
        >
            Error
        </Button>
    );
};
