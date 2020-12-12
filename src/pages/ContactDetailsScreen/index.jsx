import React from 'react';
import styled from 'styled-components';

import { Aside, Header, PageTitle } from '../../commons';
import { Form } from './Form';

export const ContactDetailsScreen = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <Header step="1" />
        <PageTitle
          title="Contact details"
          desc="Welcome to United Properties, 
            we are glad to see you! Let’s get started by 
            letting us know a little bit about you"
        />
        <Form />
      </Main>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
  width: '64%',
  // backgroundColor: 'aqua'
});