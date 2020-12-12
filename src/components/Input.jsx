import React from 'react';
import styled from 'styled-components';

export const Input = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput />
    </Container>
  );
};

const Container = styled.div({

});

const Label = styled.p({
  fontSize: 14,
  color: '#A4AEB4'
});

const TextInput = styled.input({

})