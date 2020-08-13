import styled from 'styled-components';

interface Props {
  isErrored: boolean;
}

export const Container = styled.div<Props>`
  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;

    border-radius: 0.8rem;
    border: 1px solid;
    background-color: var(--color-input-background);

    font: 1.6rem var(--font-primary);
    outline: 0;

    border-color: ${props =>
      props.isErrored
        ? 'var(--color-text-span-error)'
        : 'var(--color-line-in-white)'};
  }

  span {
    font: 1.4rem var(--font-secondary);
    color: var(--color-text-span-error);
  }
`;
