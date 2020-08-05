import styled from 'styled-components';

export const ProgressContainer = styled.div`
  height: 10px;
`;

export const Progress = styled.div`
  background-color: ${(props) => props.theme.colors.tealDark};
  height: inherit;
  width: ${(props) => props.width}%;
`;
