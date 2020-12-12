import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

import { Button } from '../components';
import '../styles/index.sass';

export const Footer = () => {
  return (
    <Container>
      <Back>
        <BsArrowLeft className="right-icon" />
        &nbsp; Back to the homepage
      </Back>
      <ButtonsRow>
        <Button title="Skip for now" className="skip-btn" />
        <Button title="Next step" className="next-btn" icon={true} />
      </ButtonsRow>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const Back = styled.div({
  fontSize: 15,
  fontWeight: 500,
  color: '#2696E8',
  display: 'flex',
  alignItems: 'center',
});

const ButtonsRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '37%',
});