import styled from 'styled-components';
import { Theme } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${Theme.primaryPageBg};
  min-height: 100vh;
`;

export const ContentBox = styled.div`
  /* height: 100vh; */
  flex: 1;
  background-color: ${Theme.primaryPageBg};
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media screen and (max-width: 1000px) {
    height: 95vh;
  }
`;
