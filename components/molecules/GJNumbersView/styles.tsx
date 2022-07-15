import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > p:first-child {
    text-align: start;
    ${({ theme }) => theme.fonts.main.regular};
    font-weight: bold;
  }

  > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    > div {
      align-self: center;
      justify-self: center;
    }
  }
`;
Container.displayName = "Container";
