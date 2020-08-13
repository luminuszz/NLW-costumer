import { useField } from '@unform/core';
import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';

import { Container } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<Props> = ({ name, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { defaultValue, registerField, fieldName, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: textAreaRef.current,
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <textarea defaultValue={defaultValue} ref={textAreaRef} {...rest} />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default TextArea;
