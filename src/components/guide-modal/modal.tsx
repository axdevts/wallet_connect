import {
  ModalContainer,
  ModalWrapper,
  ModalBorder,
  CrossIconContainer,
  ModalHeader,
  ModalBody,
  Item,
  Icon,
  ItemTitle,
  ItemContent,
  ButtonField,
  BackButton
} from './style';
import { CloseIcon } from '../../images';

interface Props {
  show: boolean;
  closeModal: () => void;
}

const Modal = (props: Props) => {
  const { show, closeModal } = props;

  return (
    <ModalWrapper show={show}>
      <ModalBorder>
        <ModalContainer>
          <CrossIconContainer onClick={closeModal}>
            <img src={CloseIcon.default} alt="close" />
          </CrossIconContainer>
          <ModalHeader>Steps to Sync ETH Wallet to BSC</ModalHeader>
          <ModalBody>
            <Item>
              <Icon>01</Icon>
              <ItemTitle>Step 1</ItemTitle>
              <ItemContent>
                Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
                vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo
                id, tincidunt non ligula.
              </ItemContent>
            </Item>
            <Item>
              <Icon>02</Icon>
              <ItemTitle>Step 2</ItemTitle>
              <ItemContent>
                Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
                vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo
                id, tincidunt non ligula.
              </ItemContent>
            </Item>
            <Item>
              <Icon>03</Icon>
              <ItemTitle>Step 3</ItemTitle>
              <ItemContent>
                Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
                vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo
                id, tincidunt non ligula.
              </ItemContent>
            </Item>
            <Item>
              <Icon>04</Icon>
              <ItemTitle>Step 4</ItemTitle>
              <ItemContent>
                Suspendisse in fringilla lectus, nec pretium lacus. Nam lacinia
                vel ex mattis feugiat. Praesent nunc velit, iaculis ac commodo
                id, tincidunt non ligula.
              </ItemContent>
            </Item>
          </ModalBody>

          <ButtonField>
            <BackButton>
              <span data-text="Back">Back</span>
            </BackButton>
          </ButtonField>
        </ModalContainer>
      </ModalBorder>
    </ModalWrapper>
  );
};

export default Modal;
