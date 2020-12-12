import React from 'react';
import styled from 'styled-components';

export const RadionButton = ({ active }) => {
  return (
    <Container style={{ opacity: active ? 1 : 0.5 }}>
      {active && <Content />}
    </Container>
  );
};

const Container = styled.div`
  width: 17px;
  height: 17px;
  border: 3px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div({
  backgroundColor: 'white',
  width: 10,
  height: 10,
  borderRadius: 2,
});

