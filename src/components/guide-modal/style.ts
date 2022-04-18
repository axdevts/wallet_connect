import styled from 'styled-components';
import { Theme, SecondaryGradientButton } from '../../utils';
import { GroupIcon } from '../../images';

interface Props {
  show: boolean;
}

export const ModalWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: ${(props) => (props.show ? '3' : '-3')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  backdrop-filter: blur(14px);
`;

export const ModalContainer = styled.div`
  width: 923px;
  padding: 52px 60px 56px 83px;
  background: ${Theme.headerBackground};
  box-shadow: ${Theme.modalShadow};
  border-radius: 12px;
  // margin: 165px auto 0 auto;
  position: relative;

  @media (max-width: 600px) {
    width: 90%;
    margin: 10px auto 0 auto;
    padding: 50px 30px 41px 30px;
  }

  @media (max-width: 500px) {
    max-height: 90%;
    overflow-y: auto;
  }
`;

export const ModalBorder = styled.div`
  background: conic-gradient(
    from 215deg at 50% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #20282e 122.18deg,
    #29353c 138.07deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #85839c 222.78deg,
    #ffffff 247.79deg,
    #51555e 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
  position: relative;
  padding: 1px;
  width: 925px;
  border-radius: 12px;
  margin: 165px auto 0;
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: -25px;
  right: -30px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalHeader = styled.div`
  font-size: 24px;
  color: #fff;
  line-height: 40px;
  font-family: Work Sans;
  padding-bottom: 24px;
  border-bottom: 1px solid #444444;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;

export const Item = styled.div``;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0px auto;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7f7f7f;
  background-image: url(${GroupIcon.default});
  z-index: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  margin: 22px 0 18px 0;
  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ItemContent = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #9aa1ac;
  opacity: 0.8;
  margin: 0 16px;
`;

export const BackButton = styled(SecondaryGradientButton)`
  width: 164px;
  height: 40px;
  margin: 56px auto 0;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;
export const ButtonField = styled.div`
  text-align: center;
`;
