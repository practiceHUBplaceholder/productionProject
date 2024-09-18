import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { UserActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(UserActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
