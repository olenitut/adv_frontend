import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/theme/themeContext";
import { Navbar } from "widgets/NavBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
