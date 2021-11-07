import styled from 'styled-components';

export const IconButtonStyled = styled.button`
  margin-left: 80px;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: white;
  font: inherit;
  background-color: blueviolet;
  cursor: pointer;

  &:hover {
    background-color: orangered;
    color: white;
    border: 2px solid yellow;
  }
`;
