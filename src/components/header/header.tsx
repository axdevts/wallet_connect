import { useState, useEffect, useRef } from 'react';
import { Dropdown } from '..';
import {
  HeaderWrapper,
  HeaderContainer,
  LinkContainers,
  Links,
  ConnectBtn,
  UserAddress,
  RightSideContent,
  EthBalance,
  EthBalanceText,
  Network
} from './style';
import { useHistory, useLocation } from 'react-router-dom';
import {
  renderTokenAmountText,
  StoreageKey,
  getNetwork,
  getMainTokenSymbol,
  Networks,
  Paths,
  PrimaryBorder
} from '../../utils';
import { Logo } from '../../images';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal';
import LoginModalContainer from '../login-modal';
import wallet from '../../utils/wallet';
import { getEthBalance } from '../../logic/actions';

const Header = () => {
  const { walletConnected, userAddress, ethBalance, network } = useSelector(
    (state: any) => state.user
  );

  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const closeModal = () => {
    setShow(false);
  };

  const handleWalletConnect = async () => {
    if (walletConnected) {
      try {
        await wallet.disconnect();
        localStorage.removeItem(StoreageKey.walletType);
      } catch (e) {
        console.log('something went wrong in logout wallet ', e);
      }
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (walletConnected) {
      dispatch(getEthBalance(userAddress));
    }
  }, [walletConnected, dispatch, userAddress]);

  const handleLink = (path: string) => {
    setStatus(0);
    history.push(path);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer walletConnected={walletConnected}>
        <LinkContainers>
          <Links active={false}>
            <img
              onClick={() => handleLink(Paths.homepage)}
              src={Logo.default}
              alt="logo"
            />
          </Links>
        </LinkContainers>

        <RightSideContent>
          {!!network && (
            <Network network={network}>{getNetwork(network)}</Network>
          )}

          {walletConnected && (
            <EthBalance>
              <EthBalanceText className="notranslate">
                {!!ethBalance &&
                  `${renderTokenAmountText(ethBalance)} ${getMainTokenSymbol(
                    network
                  )}`}
              </EthBalanceText>

              <UserAddress>
                {userAddress[0]}
                {userAddress[1]}
                {userAddress[2]}
                {userAddress[3]}
                {userAddress[4]}
                {userAddress[5]}
                ...
                {userAddress[userAddress.length - 4]}
                {userAddress[userAddress.length - 3]}
                {userAddress[userAddress.length - 2]}
                {userAddress[userAddress.length - 1]}
              </UserAddress>
            </EthBalance>
          )}

          <PrimaryBorder>
            <ConnectBtn
              onClick={handleWalletConnect}
              connected={walletConnected}
            >
              <span
                data-text={walletConnected ? 'Disconnect' : 'Connect Wallet'}
              >
                {walletConnected ? 'Disconnect' : 'Connect Wallet'}
              </span>
            </ConnectBtn>
          </PrimaryBorder>
        </RightSideContent>
      </HeaderContainer>
      <Modal show={show} closeModal={closeModal}>
        <LoginModalContainer closeModal={closeModal} />
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
