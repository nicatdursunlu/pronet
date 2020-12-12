import React from 'react';
import styled from 'styled-components';

import quote from '../assets/images/quote.png';

export const MessageBox = () => {
  return (
    <Container>
      <Image src={quote} />
      <Text>
        We care about your time, that's why we created a 3-stage onboarding
        that will not take more than 5 minutes to complete
      </Text>
      <Person>William Mac</Person>
      <Row>
        <Position>Co-founder, investor</Position>
        <Up>U<Span>p</Span></Up>
      </Row>
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: 'white',
  borderRadius: 4,
  padding: '35px 40px',
});

const Image = styled.img({
  padding: '19px 15px',
  borderRadius: 3,
  backgroundColor: '#fff',
  position: 'absolute',
  top: 475,
  left: 65,
  boxShadow: '5px 5px 49px -14px rgba(0,0,0,0.75)',
});

const Text = styled.p({
  fontSize: 16,
  color: '#A4AEB4',
  marginBottom: 0,
});

const Person = styled.p({
  fontSize: 16,
  fontWeight: 600,
  marginBottom: 0,
  marginTop: 20,
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '-30px 0',
});

const Position = styled.p({
  fontSize: 13,
  fontWeight: 500,
  color: '#A4AEB4',
  textTransform: 'uppercase',
});

const Up = styled.p({
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 24,
});

const Span = styled.span({
  color: '#35A0EE'
});
