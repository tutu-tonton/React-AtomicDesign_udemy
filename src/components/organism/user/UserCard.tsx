import { VFC } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

type Props = {
  user: {
    name: string;
    image: string;
    email: string;
    phone: string;
    company: {
      name: string;
    };
    website: string;
  };
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
