/* eslint-disable @typescript-eslint/camelcase */
import * as Yup from 'yup';

export const teacherListValidate = Yup.object().shape({
  week_day: Yup.string().required('sda'),
  subject: Yup.string().required('sad'),
  to: Yup.string().required('asdas'),
});

export type TeacherListInterface = Yup.InferType<typeof teacherListValidate>;

export const yuInstance = Yup.ValidationError;
