import React from 'react';
import styled from 'styled-components';
import ReactTelInput from 'react-telephone-input';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { Input } from '../../components';

export const Form = () => {
  return (
    <Container>
      <Row>
        <Input label="Full name" placeholder="John Doe" />
        <ReactTelInput defaultCountry="Azerbaijan" />
      </Row>
      <CountryDropdown />
    </Container>
  );
};

const Container = styled.div({
  padding: '10px 270px 0 130px',
  // backgroundColor: 'red'
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20
});