import React from 'react';
import styled from 'styled-components';

export const Input = ({ label, placeholder, className }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        placeholder={placeholder}
        autoFocus={false}
        className={className}
      />
    </Container>
  );
};

const Container = styled.div({});

export const Label = styled.p({
  fontSize: 14,
  color: '#A4AEB4'
});

const TextInput = styled.input`
  border: 0;
  border-bottom: 1px solid #D5D9DC;
  font-size: 18px;
  font-weight: 600;
  padding: 3px 8px 8px 0;

  &:focus {
    outline: none;
    border-bottom: 2px solid #35A0EE;
  }
`;