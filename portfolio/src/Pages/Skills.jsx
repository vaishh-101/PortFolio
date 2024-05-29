import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  margin-top: 10px;
`;

const SkillBox = styled.div`
  display: inline-block;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: violet;
    transform: scale(1.05);
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const skills = [
  'React JS', 'React Native', 'Node JS', 'Coral Draw',
  'API', 'HTML', 'PHP', 'JavaScript', 'MongoDB',
  'CSS', 'Angular', 'MYSQL', 'Bootstrap',
  'POSTMAN', 'Git and Github', 'DSA', 'UI / UX: Figma',
];

const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillBox key={index}>{skill}</SkillBox>
        ))}
      </SkillsGrid>
    </Container>
  );
};

export default Skills;
