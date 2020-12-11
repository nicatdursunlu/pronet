import React from 'react';
import styled from 'styled-components';
import { RadionButton } from '../components/RadionButton';

export const Aside = () => {
  return (
    <Container>
      <Header>United<Span>Properties</Span></Header>
      <Stages>
        <Contact>
          <RadionButton />
        </Contact>
      </Stages>
    </Container>
  )
}

const Container = styled.div({
  backgroundColor: "#35A0EE",
  width: "30%",
  paddingTop: 40,
  paddingLeft: 75,
});

const Header = styled.div({
  color: "#fff",
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: 18,
  paddingBottom: 250
});

const Span = styled.span({
  color: "rgba(255, 255, 255, 0.5)"
});

const Stages = styled.div({

});

const Contact = styled.div({

})

// #35A0EE