import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const QuizContainer = styled.section`
  border: 2px solid ${(props) => props.theme.colors.tealLight};
  display: flex;
  flex-direction: column;
  min-height: 650px;
  margin: 50px auto;
  width: 650px;

  @media ${breakpoints.sm} {
    width: 90%;
    margin: 20px auto;
  }
`;

export const QuizContent = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 40px 60px;
  text-align: left;

  @media ${breakpoints.sm} {
    padding: 15px;
  }
`;
