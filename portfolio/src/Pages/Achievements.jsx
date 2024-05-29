import React from "react";
import styled from "styled-components";

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
  background: linear-gradient(
    135deg,
    rgba(255, 0, 150, 0.7),
    rgba(0, 204, 255, 0.7)
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const AchievementText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Achievements = () => {
  return (
    <Container>
      <Title>Achievements</Title>
      <AchievementText>
        The 2023 Best Student Award winner at our college.
      </AchievementText>
      <AchievementText>
        Actively participate in all the events and win the rewards on the
        achievements.
      </AchievementText>
    </Container>
  );
};

export default Achievements;
