import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > span:first-child {
    font-weight: bold;
    ${({ theme }) => theme.fonts.main.massive};
  }

  > span:last-child {
    ${({ theme }) => theme.fonts.main.big};
  }
`;
Container.displayName = "Container";
