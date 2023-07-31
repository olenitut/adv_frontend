import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/theme/themeContext";
import { Navbar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
