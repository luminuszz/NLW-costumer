import styled from 'styled-components';

interface Props {
  isErrored: boolean;
}

export const Container = styled.div<Props>`
  position: relative;

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    color: var(--color-text-complement);
    outline: 0;

    border-color: ${props =>
      props.isErrored
        ? 'var(--color-text-span-error)'
        : 'var(--color-line-in-white)'};
  }

  > svg {
    position: absolute;
    right: 12px;
    top: 45%;
    pointer-events: none;
    user-select: none;
    path {
      color: var(--color-icons);
    }
  }

  & + div {
    margin-top: 2.4rem;
  }

  > span {
    font: 1.4rem var(--font-secondary);
    color: var(--color-text-span-error);
  }
`;
