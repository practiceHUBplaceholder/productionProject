import { lazy } from 'react';

const ProfilePageLazy = lazy(
    () => new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import('./ProfilePage'));
        }, 1500);
    })
);

export { ProfilePageLazy };
