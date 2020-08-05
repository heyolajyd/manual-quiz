import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/manual.svg';

export const ManualLogo = styled(Logo)`
  width: ${props => props.width};
  height: ${props => props.height};
`;
