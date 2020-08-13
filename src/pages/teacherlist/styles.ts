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
    grid-template-columns: repeat(4, 1fr);
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

export const SearchButton = styled.button`
  width: 100%;
  height: 5.6rem;

  border: 0;
  border-radius: 0.8rem;
  background-color: var(--color-secundary);
  margin-top: 3.2rem;

  color: var(--color-button-text);
  font: 700 1.6rem var(--font-primary);
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-secundary-dark);
  }
`;

export const TeacherListContent = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: ${sizes.tablet}) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
