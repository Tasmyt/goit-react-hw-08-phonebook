import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  section {
    padding:  15px 0;
    width: 1000px;
    border-bottom: 8px double  #690f84;
  }
`;

export const Button = styled.button`
  width: 92px;
  height: 32px;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  text-shadow: 0 2px white, 0 3px #777;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;
export const Sending = styled(Link)`
  margin-right: 28px;
  font-size: 24px;
  color: #690f84;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
