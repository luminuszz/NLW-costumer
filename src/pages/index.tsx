/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

import classIcon from '../assets/give-classes.svg';
import landingImg from '../assets/landing.svg';
import logoImg from '../assets/logo.svg';
import purpleHeartIcon from '../assets/purple-heart.svg';
import studyIcon from '../assets/study.svg';
import {
  Container,
  Content,
  ContainerButtons,
  LogoContainer,
  Connections,
  BannerImg,
} from '../styles/lading';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <BannerImg>
          <img src={landingImg} alt="banner" />
        </BannerImg>

        <ContainerButtons>
          <Link href="/teacherform">
            <a>
              <img src={studyIcon} alt="" />
              Estudar
            </a>
          </Link>

          <Link href="/teacherlist">
            <a>
              <img src={classIcon} alt="" />
              Dar aula
            </a>
          </Link>
        </ContainerButtons>

        <Connections>
          Total de conexões já realizadas
          <img src={purpleHeartIcon} alt="Heart" />
        </Connections>
      </Content>
    </Container>
  );
};
export default Landing;
