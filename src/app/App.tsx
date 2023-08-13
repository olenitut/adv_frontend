import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/theme/themeContext";
import { Navbar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal";

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Suspense fallback="">
      <div className={classNames("app", theme)}>
        <Navbar />
        <button onClick={() => setIsOpen((prev) => !prev)}>toggle modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>hello</div>
        </Modal>
        <div className="d-flex">
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
