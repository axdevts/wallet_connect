import styled from 'styled-components';
import {
  Theme,
  SecondaryButton,
  PrimaryInput,
  SecondaryGradientButton
} from '../utils';
import CustomNumberInput from './custom-number-input';

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${Theme.linkColor};
`;

export const Description = styled.div`
  margin-top: 24px;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  color: ${Theme.textColorPrimary};
`;

export const WarningText = styled.div`
  margin-top: 19px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${Theme.warning};
`;

export const WarningTextCenter = styled.div`
  margin-top: 19px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${Theme.warning};
  text-align: center;
`;

export const BtnContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnContainerSecondary = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 31px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ConfirmBtn = styled(SecondaryGradientButton)`
  width: 160px;
  font-size: 14px;
  line-height: 19px;
  height: 40px;
`;

export const CancelBtn = styled(SecondaryButton)`
  @media (max-width: 550px) {
    /* margin-top: 20px; */
  }
`;

export const InputContainer = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainerSecondary = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputLabel = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.textColorPrimary};
`;

export const LockInputField = styled(CustomNumberInput)`
  width: 130px;
  margin-left: 20px;

  @media (max-width: 550px) {
    width: 100%;
    margin: 15px 0 0 0;
  }
`;

export const UnlockInputField = styled(CustomNumberInput)`
  width: 120px;
  margin-left: 22px;

  @media (max-width: 550px) {
    margin: 15px 0 0 0;
  }
`;

export const TokenContainer = styled.div`
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${Theme.textColorPrimary};
  margin-left: 20px;

  @media (max-width: 550px) {
    margin: 15px 0 0 0;
  }
`;

export const FormHeader = styled.div`
  margin-top: 29px;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.textColorPrimary};
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const FormLabel = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.textColorPrimary};
  margin-left: 20px;
`;

export const AmountText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.textColorTertiary};

  @media (max-width: 550px) {
    margin-top: 10px;
  }
`;

export const ErrorText = styled.div`
  color: ${Theme.error};
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
`;

export const ImgSignContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const MaxButton = styled.button`
  width: 52px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.linkColor};
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  background: transparent;
  margin-left: auto;

  @media (max-width: 550px) {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

export const RightArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    margin: 10px 0 0 0;
  }
`;

export const DiscountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 27px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DiscountBoxText = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin: 0 20px 0 0;
  color: ${Theme.textColorPrimary};

  @media (max-width: 550px) {
    text-align: center;
    margin: 0;
  }
`;

export const DiscountField = styled(PrimaryInput)`
  width: 100px;
  height: 40px;

  @media (max-width: 550px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

export const ThanksBtnCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
`;

export const ThanksBtn = styled(SecondaryGradientButton)`
  width: 160px;
  height: 48px;
  font-size: 14px;
  line-height: 19px;
`;

export const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.textColorTertiary};
`;
