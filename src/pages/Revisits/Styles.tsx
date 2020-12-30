import styled from "styled-components";

export const RevisitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RevisitButton = styled.button`
  padding: 20px 30px;
  text-transform: capitalize;
  border: none;
  background-color: lightgray;
  border-radius: 2px;

  &:active {
    border: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transform: scale(0.9);
  }
`;
