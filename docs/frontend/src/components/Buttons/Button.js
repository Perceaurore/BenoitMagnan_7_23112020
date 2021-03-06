import styled from 'styled-components';
import {
  darkestColors,
  lightestColors,
  mediumColors,
  message,
} from '../../utils/style/colors';

const AdjustButton = styled.button`
  display: flex;
  padding: 1rem;
  border-radius: 100%;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === 'light' ? `${mediumColors.grey}` : `${lightestColors.grey}`};
  background-color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${mediumColors.grey}`};
  &:hover {
    transition: 0;
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
`;

const DisconnectButton = styled.button`
  display: flex;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 100%;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === 'light' ? `${darkestColors.grey}` : `${darkestColors.grey}`};
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${lightestColors.secondary}`
      : `${mediumColors.primary}`};
  &:hover {
    transition: 0;
    color: ${({ theme }) =>
      theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
`;

const StyledButton = styled.button`
  display: flex;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === 'light' ? `${darkestColors.grey}` : `${darkestColors.grey}`};
  background: ${({ theme }) =>
    theme === 'light'
      ? `${lightestColors.secondary}`
      : `${mediumColors.primary}`};
  &:hover {
    transition: 0;
    color: ${({ theme }) =>
      theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
  &.delete {
    max-width: 350px;
    text-align: center;
    justify-content: center;
    margin: 40px auto;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) =>
      theme === 'light' ? `${message.warning}` : `${lightestColors.grey}`};
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${message.warningBackground}`
        : `${message.warning}`};
    background: ${({ theme }) =>
      theme === 'light'
        ? `${message.warningBackground}`
        : `${message.warning}`};
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  color: ${({ theme }) =>
    theme === 'light' ? `${message.warning}` : `${lightestColors.grey}`};
  outline-color: ${({ theme }) =>
    theme === 'light' ? `${message.warningBackground}` : `${message.warning}`};
  background: ${({ theme }) =>
    theme === 'light' ? `${message.warningBackground}` : `${message.warning}`};
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: 0;
    color: ${({ theme }) =>
      theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
    outline-color: ${({ theme }) =>
      theme === 'light' ? `${message.warning}` : `${message.warning}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light' ? `${message.warning}` : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
  @media screen and (max-width: 800px) {
    margin: -100%;
    background: transparent;
    color: ${darkestColors.grey};
  }
`;

const CommentDeleteButton = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  width: 0.8rem;
  height: 0.8rem;
  color: ${({ theme }) =>
    theme === 'light' ? `${message.warning}` : `${lightestColors.grey}`};
  outline-color: ${({ theme }) =>
    theme === 'light' ? `${message.warningBackground}` : `${message.warning}`};
  background: ${({ theme }) =>
    theme === 'light' ? `${message.warningBackground}` : `${message.warning}`};
  padding: 0.8rem;
  margin: 1rem;
  font-size: 0.9rem;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    transition: 0;
    color: ${({ theme }) =>
      theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
    outline-color: ${({ theme }) =>
      theme === 'light' ? `${message.warning}` : `${message.warning}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light' ? `${message.warning}` : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
`;

export {
  AdjustButton,
  DisconnectButton,
  StyledButton,
  DeleteButton,
  CommentDeleteButton,
};
