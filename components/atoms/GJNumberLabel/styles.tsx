import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > span:first-child {
    font-weight: bold;
    font-size: xx-large;
  }

  > span:last-child {
  }
`;
Container.displayName = "Container";
