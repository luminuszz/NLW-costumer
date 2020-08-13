/* eslint-disable @typescript-eslint/camelcase */
import * as Yup from 'yup';

export const teacherFormValidateSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  avatar: Yup.string().required('O avatar é obrigatorio'),
  whatsapp: Yup.string().required('O whatsapp é obrigatorio'),
  bio: Yup.string().required('A biografia é obrigatorio'),
  subject: Yup.string().required('A Matéria é obrigatorio'),
  cost: Yup.string().required('O valor é obrigatorio'),
  schedule: Yup.array().of(
    Yup.object()
      .shape({
        week_day: Yup.number().required('O dia da semana é obrigátorio'),
        from: Yup.string().required('Obrigátorio'),
        to: Yup.string().required('Obrigátorio'),
      })
      .required('O horário é obrigátorio'),
  ),
});

export type TeacherFormInterface = Yup.InferType<
  typeof teacherFormValidateSchema
>;

export const yuInstance = Yup.ValidationError;
