import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { ClassNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ClassNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
