import whatsIcon from 'assets/whatsapp.svg';
import React, { useMemo, useState } from 'react';
import { formatValue } from 'utils';

import {
  Container,
  TeacherItemHeader,
  TeacherItemBody,
  TeacherItemFooter,
} from './styles';

interface User {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface StaticProps {
  id: string;
  subject: string;
  cost: number;
  user: User;
}

interface Props {
  data: StaticProps;
}

const TeacherItem: React.FC<Props> = ({ data }) => {
  const [teacher] = useState<StaticProps>(data);

  const formatedCost = useMemo(() => {
    return formatValue(teacher.cost);
  }, [teacher]);

  return (
    <Container>
      <TeacherItemHeader>
        <img
          src="https://avatars2.githubusercontent.com/u/48535259?s=460&u=06d85ab11a1bdb43207be7c6b2a2c491a48ca0b2&v=4"
          alt="Davi Ribeiro"
        />

        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </TeacherItemHeader>

      <TeacherItemBody>
        <p>
          {teacher.user.bio}
          <br />
          <br />
        </p>
      </TeacherItemBody>

      <TeacherItemFooter>
        <p>
          Preço/hora
          <strong>{formatedCost}</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </TeacherItemFooter>
    </Container>
  );
};

export default TeacherItem;
