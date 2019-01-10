import styled from '@emotion/styled';
import colors from '../colors';

const HorizontalRule = styled.div`
  height: 2px;
  background-color: #e0e0e0;
  background-image: linear-gradient(
    to right,
    ${colors.green} 20%,
    ${colors.brandBlue} 20%,
    ${colors.brandBlue} 40%,
    ${colors.brandPink} 40%,
    ${colors.brandPink} 60%,
    ${colors.brandOrange} 60%,
    ${colors.brandOrange} 80%,
    ${colors.brandYellow} 80%
  );
  background-size: 500px 2px;
  background-repeat: no-repeat;
`;

export default HorizontalRule;
