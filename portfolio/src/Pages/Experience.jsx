import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  text-align: center; 
  color: white; 
  border: 2px solid white; 
  background-color: #282c34; 
`;

const Experience = () => {
  return (
    <Container>
      <h1>Work Experience</h1>
      <h2>Web Developer at Helixware Solutions Pvt Ltd</h2>
      <p>05/2023 - Present, Ahmednagar</p>
    </Container>
  );
};

export default Experience;
