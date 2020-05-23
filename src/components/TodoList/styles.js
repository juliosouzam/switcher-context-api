import styled from 'styled-components';

export const List = styled.ul`
  background: ${(props) => props.theme.theme.background};
  color: ${(props) => props.theme.theme.color};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  li {
    line-height: 36px;
  }
`;
