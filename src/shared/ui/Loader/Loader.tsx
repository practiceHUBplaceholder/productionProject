import './Loader.scss';

import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader:FC<LoaderProps> = ({ className }) => (
    <div className={ClassNames('loadingio-spinner-interwind-nq4q5u6dq7r', {}, [className])}>
        <div className="ldio-x2uulkbinbj">
            <div>
                <div><div><div /></div></div>
                <div><div><div /></div></div>
            </div>
        </div>
    </div>
);
