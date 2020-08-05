import styled from 'styled-components';

export const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: 20px;

  a {
    text-decoration: none;
    margin-left: 2px;
  }
`;
