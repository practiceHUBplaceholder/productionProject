import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader:FC<PageLoaderProps> = ({ className }) => (
    <div className={ClassNames(cls.PageLoader, {}, [className])}><Loader /></div>
);
