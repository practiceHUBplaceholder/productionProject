import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Suspense } from "react";
import { ClassNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ClassNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
