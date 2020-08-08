import styled from 'styled-components';

import { sizes } from '../../styles/Global';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  grid-area: logo;

  @media (min-width: ${sizes.desktop}) {
    align-self: center;
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const BannerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: hero;

  @media (min-width: var(--desktop)) {
    justify-self: end;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;

    border-radius: 0.8rem;
    margin-right: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font: 700 2rem var(--font-primary);
    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    img {
      width: 4rem;
    }
  }

  a:first-child {
    margin-right: 1.6rem;
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  a:last-child {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  grid-area: buttons;

  @media (min-width: ${sizes.desktop}) {
    justify-content: flex-start;

    a {
      font-size: 2.4rem;

      img {
        margin-right: 2.4rem;
      }
    }
  }
`;

export const Connections = styled.span`
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100) {
    justify-self: end;
  }
`;
