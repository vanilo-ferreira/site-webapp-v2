import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { TitleProps } from './types';

export const TitleContainer = styled.h1<TitleProps>`
  color: ${({ color }) => color || '#3C7EF9'};
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
  font-family: 'Funnel Display', sans-serif;
  font-size: ${({ size = 48 }) =>
    typeof size === 'number' ? pxToRem(size) : size};
  text-align: ${({ textAlign = 'initial' }) => textAlign};
  width: ${({ width }) =>
    typeof width === 'string' ? width : width ? `${pxToRem(width)}` : '100%'};
  margin: auto;
  margin-top: ${({ marginTop = 0 }) =>
    typeof marginTop === 'number' ? `${pxToRem(marginTop)}` : marginTop};
  margin-bottom: ${({ marginBottom = 16 }) =>
    typeof marginBottom === 'number'
      ? `${pxToRem(marginBottom)}`
      : marginBottom};
`;
