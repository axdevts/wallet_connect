import { Wrapper, ContentBox } from './style';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
  backgroundColor?: string;
}

const TokenHolderLayout = (props: Props) => {
  const { children } = props;

  return (
    <Wrapper>
      <ContentBox>{children}</ContentBox>
    </Wrapper>
  );
};

export default TokenHolderLayout;
