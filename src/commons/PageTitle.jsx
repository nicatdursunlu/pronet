import React from 'react';
import styled from 'styled-components';

export const PageTitle = ({  title, desc }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Container>
  );
};

const Container = styled.div({
  padding: '0 270px 0 0',
});

const Title = styled.h2({
  fontSize: 26,
  fontWeight: '700'
});

const Description = styled.p({
  fontSize: 16,
  color: '#A4AEB4'
});