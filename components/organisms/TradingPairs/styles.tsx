import Button from "components/atoms/Button";
import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 190px;
  width: 800px;
  row-gap: 1rem;
`;
Container.displayName = "Container";

export const ButtonStyle = styled(Button)`
  align-self: center;
  justify-self: center;
  width: 90%;
  height: 80px;
`;
ButtonStyle.displayName = "ButtonStyle";
