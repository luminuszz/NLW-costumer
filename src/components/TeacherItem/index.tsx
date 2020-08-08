import whatsIcon from 'assets/whatsapp.svg';
import React from 'react';

import {
  Container,
  TeacherItemHeader,
  TeacherItemBody,
  TeacherItemFooter,
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <TeacherItemHeader>
        <img
          src="https://avatars2.githubusercontent.com/u/48535259?s=460&u=06d85ab11a1bdb43207be7c6b2a2c491a48ca0b2&v=4"
          alt="Davi Ribeiro"
        />

        <div>
          <strong>Davi Ribeiro</strong>
          <span>Quimica</span>
        </div>
      </TeacherItemHeader>

      <TeacherItemBody>
        <p>
          Entusiasta das melhores teconologias de química avançada
          <br />
          <br />
          Apaixonado por explodir coisas em laboratorio e por mudar a vida das
          pessoas.
        </p>
      </TeacherItemBody>

      <TeacherItemFooter>
        <p>
          Preço/hora
          <strong>R$ 90,0</strong>
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
