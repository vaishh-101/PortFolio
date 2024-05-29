import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: white;
`;

const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <p>Junior Software Developer based in Ahmednagar, India.</p>
      <p>
        I am a mature team worker and adaptable to all challenging situations. I can work well both in a team environment as well as using my own initiative. I can work well under pressure and adhere to strict deadlines.
      </p>
      <h2>Education</h2>
      <p>Master of Computer Application at Institute of Management Studies Career Development & Research, Ahmednagar (10/2022 - Present)</p>
      <p>Bachelor of Business Administration at Rajarshi Shahu Mahavidyalaya Deolali Pravara, Ahmednagar (07/2022)</p>
    </Container>
  );
};

export default About;
