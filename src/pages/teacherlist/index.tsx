/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormHandles, SubmitHandler } from '@unform/core';
import { Input, Header, TeacherItem, Select } from 'components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useRef, useCallback, useState } from 'react';
import { api } from 'services/api';
import { getValidationsErrors } from 'utils';
import {
  yuInstance,
  TeacherListInterface,
  teacherListValidate,
} from 'validators/teacherListValidate';

import {
  Container,
  InputControl,
  Form,
  TeacherListContent,
  SearchButton,
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
export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<StaticProps[]>('classes', {
    params: {
      subject: 'sa',
      week_day: 'dsa',
      time: 'sad',
    },
  });

  const teachers = response.data as StaticProps[];

  return {
    props: {
      teachers,
    },
  };
};

const TeacherList: React.FC = ({
  teachers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const formRef = useRef<FormHandles>(null);
  const [teachersList, setTeachersList] = useState<StaticProps[]>(teachers);

  const HandleSubmit: SubmitHandler<TeacherListInterface> = useCallback(
    async ({ week_day, subject, to }) => {
      try {
        formRef.current?.setErrors({});

        await teacherListValidate.validate(
          { week_day, subject, to },
          { abortEarly: false },
        );

        const response = await api.get<StaticProps[]>('classes', {
          params: {
            subject,
            week_day,
            to,
          },
        });

        setTeachersList(response.data);
      } catch (error) {
        if (error instanceof yuInstance) {
          const errors = getValidationsErrors(error);
          formRef.current.setErrors(errors);
        }
      }
    },
    [],
  );

  return (
    <Container>
      <Header title="Esses sãos os proffys disponíveis">
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <InputControl>
            <label htmlFor="subject">Matéria</label>
            <Select
              id="subject"
              name="subject"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ci' },
                { value: 'Educação física', label: 'Artes' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
          </InputControl>

          <InputControl>
            <label htmlFor="week_day">Dia da semana</label>
            <Select
              name="week_day"
              id="week_day"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
          </InputControl>

          <InputControl>
            <label htmlFor="time">Hora</label>
            <Input id="time" name="time" type="time" />
          </InputControl>

          <InputControl>
            <SearchButton type="submit">Buscar</SearchButton>
          </InputControl>
        </Form>
      </Header>

      <TeacherListContent>
        {teachersList.map((teacherData: StaticProps) => (
          <TeacherItem key={teacherData.id} data={teacherData} />
        ))}
      </TeacherListContent>
    </Container>
  );
};

export default TeacherList;
