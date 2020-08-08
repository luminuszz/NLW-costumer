import { Form as UnforForm } from '@unform/web';
import styled from 'styled-components';
import { sizes } from 'styles/Global';

// Header

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: ${sizes.tablet}) {
    max-width: 100%;
  }
`;

export const Form = styled(UnforForm)`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const InputControl = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;

    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    background-color: var(--color-input-background);

    outline: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    content: '';

    width: cal(100% - 3.2rem);
    height: 2px;

    background-color: var(--color-primary-light);

    position: absolute;
    left: 1.6rem;
    right: 1.6rem;

    bottom: 0;
  }

  @media (min-width: ${sizes.tablet}) {
    & + & {
      margin-top: 0;
    }
  }
`;

// Teacher List

export const TeacherListContent = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: ${sizes.tablet}) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
