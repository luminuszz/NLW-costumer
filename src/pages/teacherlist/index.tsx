/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormHandles, SubmitHandler } from '@unform/core';
import { Input, Header, TeacherItem } from 'components';
import React, { useRef, useCallback } from 'react';

import { Container, InputControl, Form, TeacherListContent } from './styles';

interface FormRequest {
  subject: string;
  week_day: string;
  time: string;
}

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const HandleSubmit: SubmitHandler<FormRequest> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header title="Esses sãos os proffys disponíveis">
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <InputControl>
            <label htmlFor="subject">Matéria</label>
            <Input id="subject" name="subject" />
          </InputControl>

          <InputControl>
            <label htmlFor="week_day">Dia da semana</label>
            <Input id="week_day" name="week_day" />
          </InputControl>

          <InputControl>
            <label htmlFor="time">Hora</label>
            <Input id="time" name="time" />
          </InputControl>
        </Form>
      </Header>

      <TeacherListContent>
        <TeacherItem />
      </TeacherListContent>
    </Container>
  );
};

export default TeacherList;
