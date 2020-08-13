import styled from 'styled-components';

interface Props {
  isErrored: boolean;
}
export const Container = styled.div<Props>`
  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;

    border-radius: 0.8rem;
    border: 1px solid;
    background-color: var(--color-input-background);

    outline: 0;

    resize: vertical;

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
