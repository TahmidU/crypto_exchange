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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > div {
      margin: 0 1rem;
    }
  }
`;
Container.displayName = "Container";
