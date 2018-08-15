import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 4rem;
  border-bottom: 1px solid black;
  padding: .5rem 1rem;
  width: 100%;
`;

const Header = () => (
  <HeaderWrapper>
      <h1>React Social Media</h1>
      <i>The number one social media for rigging elections</i>
  </HeaderWrapper>
)

export default Header;