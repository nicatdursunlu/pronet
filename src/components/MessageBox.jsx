import React from 'react';
import styled from 'styled-components';

export const MessageBox = () => {
  return (
    <Container>
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
  borderRadius: 4
});

const Text = styled.p({
  fontSize: 16,
  fontWeight: 500,
  color: '#A4AEB4',
  padding: 30,
  // backgroundColor: 'red'
});

const Person = styled.p({
  fontSize: 16,
  fontWeight: 600,
  paddingLeft: 30,
  // backgroundColor: 'aqua'
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 30,
  paddingRight: 30,
  // backgroundColor: 'blue'
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
