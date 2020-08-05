import styled from 'styled-components';

export const QuizContainer = styled.section`
  border: 2px solid ${(props) => props.theme.colors.tealLight};
  display: flex;
  flex-direction: column;
  min-height: 650px;
  margin: 50px auto;
  min-width: 600px;
  width: 50px;
`;

export const QuizContent = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 40px 60px;
  text-align: left;
`;
