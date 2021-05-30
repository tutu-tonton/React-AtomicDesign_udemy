import { VFC } from "react";
import styled from "styled-components";

export const Top: VFC = () => {
  return (
    <SContainer>
      <h2>TOP Page</h2>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
