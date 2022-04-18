import styled from 'styled-components';
import {
  Theme,
  PrimaryButton,
  SecondaryButton,
  PrimaryGradientButton,
  SecondaryGradientButton,
  LayoutProps,
  MarginPadding
} from '../utils';

export const HeaderTitle = styled(MarginPadding)`
  color: ${Theme.whiteText};
  margin-top: 60px;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;
