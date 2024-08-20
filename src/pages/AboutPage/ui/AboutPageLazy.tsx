import { lazy } from 'react';

const AboutPageLazy = lazy(
    () => new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import('./AboutPage'));
        }, 1500);
    })
);

export { AboutPageLazy };
