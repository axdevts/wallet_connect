import styled from 'styled-components';
import { Theme, CustomStyle, MarginPadding, CustomFlex } from '../../utils';

interface CustomStyleProps {
  type?: string;
  bgColor?: any;
  border?: any;
  borderRadius?: any;
  textAlign?: any;
  letterSpacing?: any;
  fontSize?: string;
  lineHeight?: any;
  marginTop?: any;
  textFillColor?: any;
}

export const CardContainer = styled(CustomStyle)<CustomStyleProps>`
  width: ${(props) => props.type === 'rarity' && '410px'};
  height: ${(props) => props.type === 'rarity' && '690px'};

  & > img {
    &:hover {
      transform: scale(1.5) translateY(-13%);
      transition: 300ms all;
    }
  }
`;

export const CardTitle = styled(MarginPadding)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '40px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
`;

export const SubTitle = styled(MarginPadding)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '40px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
  background: ${(props) => props.bg && props.bg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) =>
    props.textFillColor && props.textFillColor};
  text-transform: capitalize;
  background-blend-mode: screen, difference, normal;
  mix-blend-mode: normal;
`;

export const CardDescription = styled(CustomFlex)<CustomStyleProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '16px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
  opacity: ${(props) => (props.opacity ? props.opacity : '0.5')};
  height: ${(props) => props.height && props.height};

  p {
    color: ${Theme.whiteText};
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const MainImgs = styled.div`
  height: 100%;
  /* z-index: 2; */

  img {
    &:first-child {
      position: absolute;
      top: 0;
      right: 0;

      @media screen and (max-width: 1500px) {
        width: 40%;
        height: 50%;
      }

      @media screen and (max-width: 650px) {
        display: none;
      }
    }

    &:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 18px;
      width: 406.85px;
      height: 488.13px;

      @media screen and (max-width: 1500px) {
        width: 15%;
        height: 20%;
      }

      @media screen and (max-width: 1135px) {
        display: none;
      }
    }

    &:nth-child(3) {
      width: 734.9px;
      height: 881.72px;
      position: absolute;
      top: 100%;
      right: 0;

      @media screen and (max-width: 1500px) {
        width: 30%;
        height: 35%;
      }

      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;

export const HomeWrapper = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    margin: 40px auto;
  }
`;
