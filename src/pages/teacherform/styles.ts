import { shade } from 'polished';
import styled from 'styled-components';
import { sizes } from 'styles/Global';

interface InputControlProps {
  isTextArea?: boolean;
  isSelect?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: ${sizes.tablet}) {
    max-width: 100vw;
    margin-bottom: 0;
  }
`;

export const FormContent = styled.main`
  background-color: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  @media (min-width: ${sizes.tablet}) {
    margin-bottom: 0;
  }
`;

export const FormBlock = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  legend {
    font: 700 2.4rem var(--font-primary);
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  & + & {
    margin-top: 6.4rem;
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 0 6.4rem;
  }
`;

export const InputControl = styled.div<InputControlProps>`
  position: relative;

  label {
    font-size: 1.4rem;
    color: var(--color-text-complement);
  }

  & + & {
    margin-top: 1.4rem;
  }

  & + textarea {
    margin-top: 2.4rem;
  }

  &:focus-within::after {
    content: '';

    width: cal(100% - 3.2rem);
    height: 2px;

    background-color: var(--color-primary-light);

    position: absolute;
    left: 1.6rem;
    right: 1.6rem;

    bottom: ${props => (props.isTextArea ? 7 : 0)}px;
  }

  @media (min-width: ${sizes.tablet}) {
    & + & {
      margin-top: 1.5rem;
    }
  }
`;

export const FooterForm = styled.footer`
  padding: 4rem 2.4rem;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  P {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  p > img {
    margin-right: 2rem;
  }

  button {
    width: 100%;
    height: 5.6rem;

    border: 0;
    border-radius: 0.8rem;
    background-color: var(--color-secundary);

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
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

export const CostCoin = styled.span`
  font: 1.2rem var(--font-secondary);
  color: var(--color-text-span);
  margin-left: 12px;
`;

export const NewTimeButton = styled.button`
  background: none;
  border: 0;

  font: 700 1.6rem var(--font-primary);
  color: var(--color-primary);

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary-dark);
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 20px;
    column-gap: 1.6rem;

    div {
      margin-top: 0 !important;
    }
  }

  & + & {
    margin-top: 1.5rem;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: 0;
  outline: 0;

  cursor: pointer;
  transition: color 0.2s;
  margin-top: 2rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${shade(0.5, '#ff0000')};
  }
`;
