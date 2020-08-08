import { sizes } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 2.4rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  background-color: var(--color-box-base);
  overflow: hidden;
`;

export const TeacherItemHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  > img {
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font: 700 2.4rem var(--font-primary);
      display: block;
      color: var(--color-text-title);
    }

    span {
      font-size: 1.6rem;
      display: block;
      margin-top: 0.4rem;
    }
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 3.2rem;
  }
`;

export const TeacherItemBody = styled.div`
  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media (min-width: ${sizes.tablet}) {
    > p {
      padding: 0 3.2rem;
    }
  }
`;

export const TeacherItemFooter = styled.footer`
  padding: 3.2rem 2rem;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p > strong {
    color: var(--color-primary);
    font-size: 1.6rem;
    display: block;
  }

  button {
    width: 20rem;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border: 0;
    border-radius: 0.8rem;
    background-color: var(--color-secundary);

    color: var(--color-button-text);
    font: 700 1.4rem var(--font-primary);

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }

  @media (min-width: ${sizes.tablet}) {
    padding: 3.2rem;

    p > strong {
      display: initial;
      margin-left: 1.6rem;
    }

    button {
      width: 24.5rem;

      font-size: 1.6rem;

      justify-content: center;
    }

    button > img {
      margin-right: 1.6rem;
    }
  }
`;
