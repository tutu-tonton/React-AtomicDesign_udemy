import { ReactNode, VFC } from "react";

import { Header } from "../atoms/layout/Header";

type Props = {
  children: ReactNode;
};
export const HeaderOnly: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
