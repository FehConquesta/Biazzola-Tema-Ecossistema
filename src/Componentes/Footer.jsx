import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi'; // Importe ícones de sol e lua

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  text-align: center;
`;

const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.text};
`;

const Footer = ({ toggleTheme, currentTheme }) => {
  return (
    <FooterContainer>
      
      <ThemeToggleButton onClick={toggleTheme}>
        {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
      </ThemeToggleButton>
    </FooterContainer>
  );
};

export default Footer;