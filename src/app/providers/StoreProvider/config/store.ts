import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

const store = configureStore<StateSchema>({
  reducer: {},
  devTools: __IS_DEV__,
});

export default store;
