import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

import '../styles/index.sass';

export const Button = ({ title, className, onClick, icon }) => {
  return (
    <Container>
      <Btn className={className} onClick={onClick}>
        {title}
        {icon && <BsArrowRight className="icon-in-btn" />}
      </Btn>
    </Container>
  );
};

const Container = styled.div({});

const Btn = styled.button({
  fontWeight: 500,
  fontSize: 16,
  border: 'none',
  padding: '12px 24px',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center'
})