import React from 'react';
import styled from 'styled-components';

import { Aside, Header } from '../../commons';

export const ContactDetailsScreen = () => {
  return (
    <Container>
      <Aside />
      <Header step="1" />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
});