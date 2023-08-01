import React from "react";

const MainAsync = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return import("./Main");
});

export default MainAsync;
