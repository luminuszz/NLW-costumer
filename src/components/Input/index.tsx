import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <input type="text" defaultValue={defaultValue} ref={inputRef} {...rest} />
  );
};

export default Input;
