import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <input type="text" defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
