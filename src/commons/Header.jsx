import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

export const Header = () => {
  return (
    <Container>
      {/* <Content> */}
        <Steps>Step 1 of 3</Steps>
        <Help>
          Lost or have trouble?<Span>Get help</Span><BsArrowRight />
        </Help>
      {/* </Content> */}
    </Container>
  );
};

const Container = styled.header({
  padding: '40px 100px',
  display: 'flex',
  justifyContent: 'space-between',
});

// const Content = styled.header({
//   padding: '40px 100px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// });

const Steps = styled.p({
  color: '#A4AEB4',
  fontSize: 15,
  fontWeight: 500,
  textTransform: 'uppercase'
});

const Help = styled.p({
  color: '#A4AEB4',
  fontSize: 15,
  fontWeight: 500,
});

const Span = styled.p({
  color: '#2696E8',
});

