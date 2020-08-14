import { sizes } from '@/styles/Global';
import styled, { css } from 'styled-components';

interface HeaderContentProps {
  ishaveFormDown: boolean;
}

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.colorPrimary};

  @media (min-width: ${sizes.tablet}) {
    height: 340px;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  @media (min-width: ${sizes.tablet}) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div<HeaderContentProps>`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  ${props =>
    props.ishaveFormDown &&
    css`
      margin-bottom: 6.4rem;
    `}

  strong {
    font: 700 3.6rem var(--font-primary);
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: ${sizes.tablet}) {
    max-width: 740px;

    margin: 0 auto;
    padding-bottom: 48px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 350px;
    }
  }
`;
