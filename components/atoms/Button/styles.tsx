import Color from "color";
import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 175px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  border: 1px solid
    ${({ theme }) => Color(theme.colours.almostBlack).alpha(0.2).toString()};
  border-radius: 12px;

  background-color: ${({ theme }) =>
    Color(theme.colours.almostBlack).alpha(0.05).toString()};

  :hover {
    background-color: ${({ theme }) =>
      Color(theme.colours.almostBlack).alpha(0.1).toString()};
  }

  > span {
    ${({ theme }) => theme.fonts.main.big};
    text-align: center;
  }
`;
Container.displayName = "Container";
