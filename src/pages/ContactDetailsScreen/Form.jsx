import React from 'react';
import styled from 'styled-components';

import { Input } from '../../components';

export const Form = () => {
  return(
    <Container>
      <Input label="Full name" />
    </Container>
  );
};

const Container = styled.div({
  padding: '10px 270px 0 130px',
  // backgroundColor: 'red'
});