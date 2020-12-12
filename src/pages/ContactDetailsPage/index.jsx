import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

import { Aside, Footer, Header, PageTitle } from '../../commons';
import { Form } from './Form';

export const ContactDetailsPage = () => {

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
        <Privacy>Privacy policy</Privacy>
        <Description>
          We know you care about how your personal information
          is used and shared, so we take your privacy seriously
        </Description>
        <Expand>
          Expand privacy policy &nbsp;
          <BsArrowRight className="right-icon" />
        </Expand>
        <Footer />
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
  width: '70%',
  padding: '0 130px',
});

const Privacy = styled.h3({
  fontWeight: 700,
  fontSize: 19,
  marginTop: 30,
});

const Description = styled.p({
  fontSize: 16,
  color: '#A4AEB4',
  padding: '0 270px 0 0',
  marginTop: -15,
});

const Expand = styled.div({
  fontSize: 15,
  fontWeight: 500,
  color: '#2696E8',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 80,
})