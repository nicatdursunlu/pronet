import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

import  '../styles/index.sass';

export const Header = ({ step }) => {
  return (
    <Container>
      <Steps>Step {step} of 3</Steps>
      <HelpPart>
        <Help>Lost or have trouble? &nbsp;</Help>
        <BlueText> Get help &nbsp;</BlueText>
        <BsArrowRight className="right-icon" />
      </HelpPart>
    </Container>
  );
};

const Container = styled.header({
  padding: '30px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Steps = styled.div({
  color: '#A4AEB4',
  fontSize: 15,
  fontWeight: 500,
  textTransform: 'uppercase'
});

const HelpPart = styled.div({
  color: '#A4AEB4',
  fontSize: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Help = styled.p({});

export const BlueText = styled.p({
  color: '#2696E8',
  fontWeight: 500,
});

