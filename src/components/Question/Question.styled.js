import styled from 'styled-components';

export const QuestionContainer = styled.section`
  display: block;
  flex-basis: 200px;
`;

export const Content = styled.div`
  padding: 20px 0;
`;

export const Options = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightCyan};
  }
`;

export const ItemName = styled.span`
  margin-left: 20px;
`;
