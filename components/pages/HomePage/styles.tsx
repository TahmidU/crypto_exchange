import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  min-height: 100vh;
  padding: 1rem;

  > div:first-child {
  }

  > div:last-child {
    display: grid;
    grid-template-rows: 40% 60%;

    > div:first-child {
      justify-self: center;
    }
  }
`;
Container.displayName = "Container";
