import { VFC } from "react";
import styled from "styled-components";

type Props = {
  image: string;
  name: string;
};
export const UserIconWithName: VFC<Props> = (props) => {
  const { image, name } = props;

  return (
    <SContainer>
      <SImg height={160} width={160} alt={name} src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
