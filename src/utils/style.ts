import { Field } from 'formik';
import styled from 'styled-components';
import { string } from 'yup';
import { Theme } from './theme';
import { LayoutProps } from '.';

export const MarginPadding = styled.div<LayoutProps>`
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-right: ${(props) => props.marginRight && props.marginRight};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  padding-top: ${(props) => props.paddingTop && props.paddingTop};
  padding-right: ${(props) => props.paddingRight && props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom && props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft && props.paddingLeft};
  padding: ${(props) => props.padding && props.padding + '!important'};
`;

export const CustomText = styled.div<LayoutProps>`
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  text-align: ${(props) => props.textAlign && props.textAlign};
  font-size: ${(props) => props.fontSize && props.fontSize};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : '0.01em'};
  color: ${(props) => (props.color ? props.color : Theme.whiteText)};
`;

export const CustomFlex = styled(MarginPadding)<LayoutProps>`
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
`;

export const FlexStyle = styled(MarginPadding)<LayoutProps>`
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  max-height: ${(props) => props.maxHeight && props.maxHeight};
  min-width: ${(props) => props.minWidth && props.minWidth};
  min-height: ${(props) => props.minHeight && props.minHeight};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const FlexRowCenter = styled(FlexStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexRowSpace = styled(FlexStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnSpace = styled(FlexStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CustomStyle = styled.div<LayoutProps>`
  background: ${(props) => props.bgColor && props.bgColor};
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: center;
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  border: ${(props) => props.border && props.border};
  border-top-left-radius: ${(props) =>
    props.borderTopLeft && props.borderTopLeft};
  border-top-right-radius: ${(props) =>
    props.borderTopRight && props.borderTopRight};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeft && props.borderBottomLeft};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeft && props.borderBottomLeft};
  padding: ${(props) => props.padding && props.padding};
`;

export const PrimaryButton = styled.button`
  width: 160px;
  height: 40px;
  background: ${Theme.buttonPrimaryBg};
  color: ${Theme.buttonPrimaryColor};
  box-shadow: ${Theme.buttonBoxShadowPrimary};
  border-radius: ${Theme.buttonBorderRadius};
  border: 0;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;

  :disabled {
    cursor: not-allowed;
    background: ${Theme.disabledButton};
    box-shadow: 0px 0px;
  }
`;

export const SecondaryButton = styled.button`
  width: 160px;
  height: 40px;
  background: #0a0f12;
  border: 1px solid ${Theme.linkColor};
  color: ${Theme.linkColor};
  filter: drop-shadow(0px 0px 10px rgba(45, 210, 255, 0.4));
  border-radius: ${Theme.elementBorderRadius};
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryInput = styled(Field)`
  width: 160px;
  height: 40px;
  background: ${Theme.primaryPageBg};
  border: 1px solid ${Theme.primaryPageBg};
  box-sizing: border-box;
  border-radius: ${Theme.componentBorderRadius};
  padding: 6px 10px;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${Theme.textColorPrimary};
  transition: 300ms all;

  :focus {
    border: 1px solid ${Theme.linkColor};
  }
`;

export const PrimaryText = styled.div`
  height: 40px;
  background: ${Theme.buttonSecondaryBg};
  border: 1px solid ${Theme.borderPrimary};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
`;

export const PrimaryGradientButton = styled.button`
  background-repeat: no-repeat;
  color: ${Theme.buttonPrimaryColor};
  border-radius: ${Theme.elementBorderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    cursor: not-allowed;
    background: #0a0f12;
    box-shadow: 0px 0px;
    border-radius: ${Theme.elementBorderRadius};
  }
`;

export const SecondaryGradientButton = styled.button`
  background: conic-gradient(
      from 180deg at 50% 50%,
      #ffffff 0deg,
      #000000 51.64deg,
      #ffffff 79.77deg,
      #000000 141.65deg,
      #ffffff 194.15deg,
      #000000 254.15deg,
      #ffffff 286.03deg,
      #000000 331.03deg,
      #ffffff 360deg
    ),
    conic-gradient(
      from 180deg at 50% 50%,
      #ffffff 0deg,
      #000000 51.64deg,
      #ffffff 79.77deg,
      #000000 141.65deg,
      #ffffff 194.15deg,
      #000000 254.15deg,
      #ffffff 286.03deg,
      #000000 331.03deg,
      #ffffff 360deg
    ),
    radial-gradient(
      95% 95% at 36.4% 1.4%,
      #f7d4cb 0%,
      #fffae2 20.64%,
      rgba(255, 186, 255, 0.850701) 42.07%,
      #ffd5b7 62.26%,
      #fffee2 80.49%,
      #79a2f2 100%
    );
  background-blend-mode: screen, difference, normal;
  mix-blend-mode: normal;
  box-shadow: 2px 2px 0px rgba(66, 80, 92, 0.82);
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${Theme.sidebarBg};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #263339;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    -webkit-letter-spacing: 0.01em;
    -moz-letter-spacing: 0.01em;
    -ms-letter-spacing: 0.01em;
    letter-spacing: 0.01em;
    display: inline-grid;
    grid-template-areas: 'text';
    place-items: center;

    /* span {
			background: black;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke: 0.01em rgba(0, 0, 0, 0.6);
		} */

    /* & > *,
		&::before,
		&::after {
			grid-area: text;
		}

		&::before,
		&::after {
			content: attr(data-text);
			color: #fff;
		}

		&::before {
			-webkit-text-stroke: 0.1em white;
			background: no-repeat linear-gradient(white, white) 15% 50% / 85% 60%; */

    /* Original failed attempt */
    /* letter-spacing: -0.04em; */
    /* transform: scale(1.12) translateX(-0.02em) translateY(0.002em); */
    /* text-shadow: 0.002em 0.002em 0.02em rgba(0, 0, 0, 0.75); */
    /* -webkit-text-stroke: 0.001em rgba(0, 0, 0, 0.6); */
    /* } */

    /* &::after {
			text-shadow: 0.07em 0.08em 0.05em rgba(0, 0, 0, 0.75),
			-0.07em -0.05em 0.05em rgba(0, 0, 0, 0.75);
			z-index: -2;
		} */
  }

  :disabled {
    cursor: not-allowed;
    background: ${Theme.buttonSecondaryBg};
    box-shadow: 0px 0px;
    border-radius: ${Theme.elementBorderRadius};
    color: ${Theme.sidebarBg};

    span {
      color: ${Theme.sidebarBg};
    }
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 144px;
  }
`;

export const BorderFirst = styled(MarginPadding)`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  text-align: center;
  padding: 2px;
  background: linear-gradient(180deg, #0b0e0f 0%, #1a1e23 100%);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 2px #6e8a9f,
    inset 0px 0px 0px 4px #1b3352,
    inset 0px 0px 0px 5px rgba(255, 255, 255, 0.25),
    inset 0px 0px 10px 10px #000000;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BorderSecond = styled(MarginPadding)`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  margin: ${(props) => (props.margin ? props.margin : '2px')};
  padding: ${(props) => (props.padding ? props.padding : '2px')};
  border-radius: 16px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #ffe978 122.18deg,
    rgba(255, 186, 255, 0.850701) 138.07deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #ffe978 222.78deg,
    #ffffff 247.79deg,
    rgba(133, 174, 255, 0.109315) 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
`;

export const BorderForBtn = styled.div`
  padding: 1px;
  background: linear-gradient(
    121.26deg,
    #1f50fe 0.42%,
    #c1c0c8 27.28%,
    #ffffff 60.1%,
    #e79bfe 96.11%
  );
  border-radius: ${Theme.elementBorderRadius};

  @media (max-width: 500px) {
    margin-top: 20px;
    width: 144px;
  }
`;

export const PrimaryBorder = styled.div<LayoutProps>`
  background: conic-gradient(
    from 180deg at 50% 50%,
    #ffffff -1.14deg,
    #fadd58 4.87deg,
    rgba(255, 255, 255, 0.964973) 12.61deg,
    #e6ae83 24.16deg,
    rgba(255, 255, 255, 0.949566) 29.95deg,
    rgba(255, 255, 255, 0.901443) 35.48deg,
    #ebbbf0 41.11deg,
    rgba(255, 255, 255, 0.856301) 51.73deg,
    #fadd58 59.78deg,
    rgba(255, 255, 255, 0.810395) 68.26deg,
    #cc6347 75.93deg,
    rgba(255, 255, 255, 0.765917) 88.06deg,
    #538aff 93.41deg,
    rgba(255, 255, 255, 0.7209) 96.09deg,
    #e4edff 107.05deg,
    rgba(255, 255, 255, 0.683293) 114.01deg,
    #e6ae83 120.88deg,
    #c4c4c4 122.02deg,
    rgba(255, 255, 255, 0.646412) 122.38deg,
    #103f5a 128.43deg,
    rgba(124, 200, 237, 0.579017) 134.06deg,
    rgba(39, 51, 57, 0.544723) 140.38deg,
    #242f34 146.53deg,
    rgba(33, 46, 52, 0.498667) 150.86deg,
    #23262b 316.22deg,
    #f6f08e 324.76deg,
    #b3b3b3 332.03deg,
    #ffffff 335.66deg,
    #6751f0 343.76deg,
    #e7e7e7 352.96deg,
    #ffffff 358.86deg,
    #fadd58 364.87deg
  );
  border-radius: ${Theme.componentBorderRadius};
  padding: 2px;
  width: ${(props) => (props.width ? props.width : '173px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  margin-right: ${(props) => props.marginRight && props.marginRight};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${Theme.whiteText};
    text-decoration: none;
  }
`;

export const BorderPrimaryButton = styled.div`
  background: linear-gradient(189deg, #2c2f35 6.83%, #0b1014 97.87%);
  border-radius: ${Theme.componentBorderRadius};
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.whiteText};
`;

export const CircleBorder = styled.div<LayoutProps>`
  padding: ${(props) => (props.padding ? props.padding : '2px')};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  text-align: center;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #ffe978 122.18deg,
    #ef65fe 133.57deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #ffe978 222.78deg,
    #ffffff 247.79deg,
    rgba(133, 174, 255, 0.109315) 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleBlackBg = styled.div<LayoutProps>`
  background: ${Theme.blackText};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.padding ? props.padding : '2px')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
