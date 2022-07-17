import Button from "components/atoms/Button";
import Color from "color";
import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 220px;
  max-width: 800px;
  width: 100%;
  row-gap: 1rem;
`;
Container.displayName = "Container";

export const ButtonStyle = styled(Button)<{ selected: boolean }>`
  align-self: center;
  justify-self: center;
  //width: 90%;
  height: 80px;
  ${({ theme, selected }) =>
    selected
      ? `background-color: ${Color(theme.colours.red).alpha(0.4).toString()};`
      : ""};

  :hover {
    ${({ theme, selected }) =>
      selected
        ? `background-color: ${Color(theme.colours.red).alpha(0.6).toString()};`
        : `background-color: ${Color(theme.colours.almostBlack)
            .alpha(0.1)
            .toString()}`};
  }
`;
ButtonStyle.displayName = "ButtonStyle";
