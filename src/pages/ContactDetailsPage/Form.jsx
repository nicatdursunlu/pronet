import React, { useState } from 'react';
import styled from 'styled-components';
import ReactTelInput from 'react-telephone-input';
import { CountryDropdown } from 'react-country-region-selector';

import { Input } from '../../components';
import { Label } from '../../components/Input';
import '../../styles/index.sass';

export const Form = () => {

  const [country, setCountry] = useState("");

  return (
    <Container>
      <Row>
        <Input label="Full name" placeholder="John Doe" />
        <ReactTelInput defaultCountry="Azerbaijan" />
      </Row>
      <Input
        label="E-mail address"
        placeholder="john.doe@unitedproperties.com"
        className="e-mail"
      />
      <Label>Country</Label>
      <CountryDropdown
        className="country"
        value={country}
        onChange={(val) => setCountry(val)}
      />
    </Container>
  );
};

const Container = styled.div({
  padding: '10px 270px 0 0',
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20
});

