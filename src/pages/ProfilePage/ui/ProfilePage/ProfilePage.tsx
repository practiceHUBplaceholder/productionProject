import { ProfileReducer } from 'entities/Profile';
import { FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducerList = {
    profile: ProfileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage:FC<ProfilePageProps> = ({ className }) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={ClassNames('', {}, [className])}>123</div>
    </DynamicModuleLoader>
);

export default ProfilePage;
