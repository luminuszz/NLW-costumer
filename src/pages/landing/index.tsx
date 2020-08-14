import classIcon from 'assets/give-classes.svg';
import landingImg from 'assets/landing.svg';
import logoImg from 'assets/logo.svg';
import purpleHeartIcon from 'assets/purple-heart.svg';
import studyIcon from 'assets/study.svg';
import { useTheme } from 'hooks/ThemeContext';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import ReactToogle from 'react-switch';
import { api } from 'services/api';

import {
  Container,
  Content,
  ContainerButtons,
  LogoContainer,
  Connections,
  BannerImg,
  Toogle,
} from './styles';

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('users/connections');

  return {
    props: {
      connections: response.data,
    },
  };
};

type StaticProps = {
  connections: number;
};
type Props = StaticProps & InferGetStaticPropsType<typeof getStaticProps>;

const Landing: React.FC<Props> = ({ connections }) => {
  const { toogleTheme, theme } = useTheme();

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
          <Link href="/teacherlist ">
            <a>
              <img src={studyIcon} alt="" />
              Estudar
            </a>
          </Link>

          <Link href="/teacherform">
            <a>
              <img src={classIcon} alt="" />
              Dar aula
            </a>
          </Link>
        </ContainerButtons>

        <Connections>
          {`Total de ${connections} conexões já realizadas`}
          <img src={purpleHeartIcon} alt="Heart" />
        </Connections>
      </Content>
      <Toogle>
        <ReactToogle
          onChange={() => toogleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
      </Toogle>
    </Container>
  );
};

export default Landing;
