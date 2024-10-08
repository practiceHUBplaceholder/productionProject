import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('translation');

    return (
        <div className={ClassNames(cls.NotFoundPage, {}, [className])}>{t('Page-not-found')}</div>
    );
};
