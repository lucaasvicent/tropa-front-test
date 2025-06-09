import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background-home);
  margin: 0;
  padding: 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5.43rem;
  padding: 1.87rem;
`;

export const TextHeader = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0%;
  color: var(--gray-100);

  span {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0%;
    color: var(--black-100);
  }
`;

export const TitleHeader = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0%;
  color: var(--orange-100);
`;

export const EventContainer = styled.div`
  width: 100%;
  height: 825px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
