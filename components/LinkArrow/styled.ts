import styled from 'styled-components';
import { colors, media } from '../../styles/variables';
import { StyleProps } from '../Arrow/Arrow.d';

export const Link = styled.a<StyleProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: left;
  color: ${({ $color }) => ($color ? $color : colors.black)};
  text-transform: uppercase;
  cursor: pointer;

  @media (${media.pc}) {
    font-size: 16px;
    letter-spacing: 2px;
  }
`;
