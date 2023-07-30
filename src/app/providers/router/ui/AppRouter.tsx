import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {routeConfig.map((el) => (
          <Route path={el.path} element={el.element} key={el.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
