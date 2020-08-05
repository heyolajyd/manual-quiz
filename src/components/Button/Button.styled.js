import styled from 'styled-components';

export const BaseButton = styled.button`
  background-color: ${(props) => props.theme.colors.tealLight};
  cursor: pointer;
  outline: none;
  border-radius: 24px;
  height: 48px;
  padding: 10px 35px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 2.4px;
  border: 0;
  max-width: 220px;

  &:disabled {
    color: rgba(16, 16, 16, 0.3);
    background-color: rgba(239, 239, 239, 0.3);
    border-color: rgba(195, 195, 195, 0.3);
  }
`;
