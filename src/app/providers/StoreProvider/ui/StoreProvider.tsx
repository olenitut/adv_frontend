import { FC, ReactNode } from "react";
import store from "../config/store";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
