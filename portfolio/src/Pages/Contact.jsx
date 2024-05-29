import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const IconLink = styled.a`
  display: inline-block;
  margin: 0 5px;
  animation: ${shakeAnimation} 0.5s infinite;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <p>Email: <a href="mailto:vaishnavichoudhary200@gmail.com">vaishnavichoudhary200@gmail.com</a></p>
      <p>Phone: 9607576072</p>
      <p>
        <IconLink href="https://www.linkedin.com/in/vaishnavi-choudhary-845a4a1b7" target="_blank" rel="noopener noreferrer">LinkedIn</IconLink> | 
        <IconLink href="https://twitter.com/101_vaishnavi" target="_blank" rel="noopener noreferrer"> Twitter</IconLink> | 
        <IconLink href="https://github.com/vaishh-101" target="_blank" rel="noopener noreferrer"> GitHub</IconLink>
      </p>
    </Container>
  );
};

export default Contact;
