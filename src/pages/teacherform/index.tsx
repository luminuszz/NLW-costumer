/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormHandles, SubmitHandler, Scope } from '@unform/core';
import { Form } from '@unform/web';
import warningIcon from 'assets/warning.svg';
import { Header, Input, TextArea, Select, Loader } from 'components';
import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { api } from 'services/api';
import { uuid } from 'uuidv4';
import {
  TeacherFormInterface,
  teacherFormValidateSchema,
  yuInstance,
} from 'validators/teachFormValidate';

import getValidationsErrors from '../../utils/getValidationsErrors';
import {
  Container,
  FormContent,
  FormBlock,
  InputControl,
  FooterForm,
  CostCoin,
  ScheduleItem,
  NewTimeButton,
  RemoveButton,
} from './styles';

interface ScheduleItemProps {
  id: string;
  week_day: number;
  to: string;
  from: string;
}

const TeacherForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isVisible, setIsvisible] = useState(false);
  const [scheduleList, setScheduleList] = useState<ScheduleItemProps[]>([
    {
      id: uuid(),
      from: '',
      week_day: 0,
      to: '',
    },
  ]);
  const { push } = useRouter();

  const addNewScheduleItem = useCallback(() => {
    const newScheduleItem: ScheduleItemProps = {
      id: uuid(),
      from: '',
      week_day: 0,
      to: '',
    };

    setScheduleList(oldScheduleList => [...oldScheduleList, newScheduleItem]);
  }, []);

  const removeScheduleItem = useCallback(
    (id: string) => {
      const newScheduleList = scheduleList.filter(
        scheduleItem => scheduleItem.id !== id,
      );
      setScheduleList(newScheduleList);
    },
    [scheduleList],
  );

  const handleSubmit: SubmitHandler<TeacherFormInterface> = useCallback(
    async data => {
      try {
        setIsvisible(true);
        formRef.current?.setErrors({});

        await teacherFormValidateSchema.validate(data, { abortEarly: false });

        await api.post('classes', data);

        toast.success('Aula criada com sucesso');

        push('/');
      } catch (error) {
        if (error instanceof yuInstance) {
          const errors = getValidationsErrors(error);
          formRef.current.setErrors(errors);
          return;
        }

        toast.error('Erro ao criar a aula tente novamente mais tarde');
      } finally {
        setIsvisible(false);
      }
    },
    [push],
  );

  return (
    <Container>
      <Header
        title="Que incrivel que você quer dar aulas"
        description="O Primeiro passo é preencher esse formulário de inscrição"
      />

      <FormContent>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <FormBlock>
            <legend>Seus dados</legend>

            <InputControl>
              <label htmlFor="name">Nome completo </label>
              <Input id="name" name="name" type="text" />
            </InputControl>

            <InputControl>
              <label htmlFor="avatar">Avatar</label>
              <Input id="avatar" name="avatar" type="text" />
            </InputControl>

            <InputControl>
              <label htmlFor="whatsapp">Whatsapp </label>
              <Input id="whatsapp" name="whatsapp" type="text" />
            </InputControl>

            <InputControl isTextArea>
              <label htmlFor="bio">Biografia </label>
              <TextArea id="bio" name="bio" />
            </InputControl>
          </FormBlock>

          <FormBlock>
            <legend>Sobre a aula</legend>

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
              <label htmlFor="cost">
                Custo da sua hora por aula
                <CostCoin>(em R$)</CostCoin>
              </label>
              <Input id="cost" name="cost" type="text" />
            </InputControl>
          </FormBlock>

          <FormBlock>
            <legend>
              Horários disponíveis
              <NewTimeButton type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </NewTimeButton>
            </legend>

            {scheduleList.map(({ id }, index) => (
              <ScheduleItem key={id}>
                <Scope path={`schedule[${index}]`}>
                  <InputControl>
                    <label htmlFor="week_day">Dia da semana</label>
                    <Select
                      id="week_day"
                      name="week_day"
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
                    <label htmlFor="from">Das</label>
                    <Input name="from" id="from" type="time" />
                  </InputControl>

                  <InputControl>
                    <label htmlFor="to">Até</label>
                    <Input name="to" id="to" type="time" />
                  </InputControl>

                  <RemoveButton>
                    <FiTrash2
                      size={15}
                      onClick={() => removeScheduleItem(id)}
                    />
                  </RemoveButton>
                </Scope>
              </ScheduleItem>
            ))}
          </FormBlock>

          <FooterForm>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante !
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              <Loader
                visibility={Number(!!isVisible)}
                color="#ffff"
                text="Salvar cadastro"
              />
            </button>
          </FooterForm>
        </Form>
      </FormContent>
    </Container>
  );
};

export default TeacherForm;
