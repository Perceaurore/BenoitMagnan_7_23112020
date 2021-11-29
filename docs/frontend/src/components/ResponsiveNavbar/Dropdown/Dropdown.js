import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import colors from '../../../utils/style/colors/baseColors';

const DropdownContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.secondary};
  border-radius: 25px;
  display: none;
  align-items: center;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div`
  color: #fff;
`;

const DropdownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (orientation: landscape) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export { DropdownContainer, CloseIcon, Icon, DropdownWrapper, DropdownMenu };
