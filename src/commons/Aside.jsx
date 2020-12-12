import React from 'react';
import styled from 'styled-components';

import { MessageBox, RadionButton } from '../components';

export const Aside = ({ active }) => {
  return (
    <Container>
      <Header>United<Span>Properties</Span></Header>
      <Stages>
        <Contact>
          <RadionButton active={true} />
          <Text>Contact details</Text>
        </Contact>
        <Contact>
          <RadionButton active={false} />
          <Text style={{ opacity: 0.5 }}>Investment plans</Text>
        </Contact>
        <Contact>
          <RadionButton active={false} />
          <Text style={{ opacity: 0.5 }}>Investment preferences</Text>
        </Contact>
      </Stages>
      <MessageBox />
    </Container>
  )
}

const Container = styled.div({
  backgroundColor: "#35A0EE",
  width: "27%",
  padding: '30px 50px',
});

const Header = styled.div({
  color: "#fff",
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: 18,
  paddingBottom: 135,
});

const Span = styled.span({
  color: "rgba(255, 255, 255, 0.5)",
});

const Stages = styled.div({
  paddingBottom: 120,
});

const Contact = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Text = styled.p({
  marginLeft: 15,
  color: 'white',
  fontSize: 18,
  fontWeight: 700,
});