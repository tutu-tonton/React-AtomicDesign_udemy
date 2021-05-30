import { VFC } from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
};

export const Input: VFC<Props> = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 888px;
  outline: none;
`;
