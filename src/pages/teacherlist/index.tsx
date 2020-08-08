import Link from 'next/link';
import React from 'react';

import backIcon from '../../assets/back.svg';
import logoImg from '../../assets/logo.svg';
import {
  Container,
  Header,
  ToBar,
  HeaderContent,
} from '../../styles/teacherlist';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header>
        <ToBar>
          <Link href="/">
            <a>
              <img src={backIcon} alt="Voltar" />
            </a>
          </Link>

          <img src={logoImg} alt="Logo" />
        </ToBar>

        <HeaderContent>
          <strong>Estes são os proffys disponíves.</strong>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default TeacherList;
