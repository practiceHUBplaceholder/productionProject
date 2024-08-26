import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from '../widgets/Sidebar/index';
import { Navbar } from '../widgets/Navbar/index';

const App = () => {
    const { theme } = useTheme();
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
