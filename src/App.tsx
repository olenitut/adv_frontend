import { Suspense } from "react";
import classNames from "./helpers/classNames/classNames";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutAsync from "./pages/About/About.async";
import MainAsync from "./pages/Main/Main.async";
import { Theme, useTheme } from "./state/theme/themeContext";

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
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutAsync />} />
          <Route path="/" element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
