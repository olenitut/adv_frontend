import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  element?: HTMLElement;
};

const Portal: FC<Props> = ({
  children,
  element = document.getElementById("root"),
}) => {
  return createPortal(children, element);
};

export default Portal;
