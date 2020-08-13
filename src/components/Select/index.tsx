import { useField } from '@unform/core';
import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container } from './styles';

interface Options {
  value: string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: Options[];
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const { defaultValue, fieldName, registerField, error } = useField(name);

  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: selectRef.current,
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <select defaultValue={defaultValue} ref={selectRef} {...rest}>
        <option value="" defaultValue="" disabled hidden>
          Selecione uma opção
        </option>

        {rest.options &&
          rest.options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>

      <MdKeyboardArrowDown size={28} />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Select;
