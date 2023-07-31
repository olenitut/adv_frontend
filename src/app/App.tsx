import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/theme/themeContext";
import { Navbar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <Suspense fallback="">
      <div className={classNames("app", theme)}>
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <AppRouter />
          <div>{t("translate")}</div>
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
            }
          >
            {t("translate")}
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
