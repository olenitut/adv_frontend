import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/theme/themeContext";
import { Navbar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "shared/ui/Modal";

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    root.className = "";
    document.getElementById("root").classList.add(theme);
  }, [theme]);

  return (
    <Suspense fallback="">
      <div className={classNames("app", theme)}>
        <Navbar />

        <div className="d-flex">
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
