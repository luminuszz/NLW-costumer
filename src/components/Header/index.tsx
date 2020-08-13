import Link from 'next/link';
import React from 'react';

import backIcon from '../../assets/back.svg';
import logoImg from '../../assets/logo.svg';
import { Container, TopBar, HeaderContent } from './styles';

interface Props {
  title: string;
  description?: string;
  isUp?: string;
}

const Header: React.FC<Props> = ({ title, children, description }) => {
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

      <HeaderContent ishaveFormDown>
        <strong>{title}</strong>

        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
