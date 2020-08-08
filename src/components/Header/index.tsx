import Link from 'next/link';
import React from 'react';

import backIcon from '../../assets/back.svg';
import logoImg from '../../assets/logo.svg';
import { Container, TopBar, HeaderContent } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <TopBar>
        <Link href="/">
          <a>
            <img src={backIcon} alt="Voltar" />
          </a>
        </Link>

        <img src={logoImg} alt="Proffy" />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>

        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
