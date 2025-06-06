"use client"
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: var(--background);
`;

export const ContainerDashboard = styled.div`
  display: flex;
  width: 47.28rem;
  height: 31.125rem;
  border-radius: 1.25rem;
  background: var(--white-100);
  box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
  padding: 0.625rem;
  align-items: center;
  margin: 1.87rem;
  justify-content: space-between;
`;

export const ContainerDashboardForm = styled.div`
  display: flex;
  width: 21.18rem;
  height: 29.87rem;
  justify-content: center;
  align-items: center;
  margin: 1.87rem;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.6875rem;
  height: 24.25rem;
  gap: 2.1875rem;

`;

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.84rem;
  // height: 29.87rem;
  height: 100%;
  justify-content: end;
  align-items: end;
  // background: blue;
`;

export const SectionRightContent = styled.div`
  position: relative;
  height: 100%;
  width: 22.21rem;
  background: var(--orange-100);
  border-radius: 20px;
  justify-content: center;
  overflow: visible;
`;

export const PersonImageWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  left: -35px;
`;

export const TitleDashboard = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 1.62rem;
  font-weight: 700;
  color: var(--orange-100);
  margin: 0;
  padding: 0;
  letter-spacing: 0%;

  span {
    display: block;
    font-size: 0.81rem;
    color: var(--blue-90);
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0%;
  }
`;
