import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError:FC<PageErrorProps> = ({ className }) => {
    const { theme } = useTheme();
    const { t } = useTranslation('translation');
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={ClassNames(cls.PageError, {}, [className, theme])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p className={cls.emoticon}>(,,&gt;﹏&lt;,,)</p>
            <p>
                {t('Unexpected-error')}
            </p>
            <Button onClick={reloadPage} theme={ThemeButton.CLEAR} className={cls.error_button}>
                {t('Refresh-page')}
            </Button>
        </div>
    );
};
