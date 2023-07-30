import { Link } from "react-router-dom";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Theme, useTheme } from "app/providers/theme/themeContext";

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button
        onClick={() =>
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }
      >
        {theme === Theme.LIGHT ? "Dark mode" : "Light mode"}
      </button>
      <AppRouter />
    </div>
  );
};

export default App;
