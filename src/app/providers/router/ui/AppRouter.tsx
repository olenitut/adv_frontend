import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/Loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map((el) => (
          <Route
            path={el.path}
            element={<div className="page">{el.element}</div>}
            key={el.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
