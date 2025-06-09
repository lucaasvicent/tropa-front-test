import styled, { css } from "styled-components";

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background-home);
  margin: 0;
  padding: 0;
  position: relative;
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
  color: var(--gray-100);

  span {
    font-weight: bold;
    color: var(--black-100);
  }
`;

export const TitleHeader = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: var(--orange-100);
`;

export const EventContainer = styled.div`
  width: 100%;
  height: 825px;
  display: flex;
  justify-content: center;
`;


interface SidebarProps {
  isOpen: boolean;
}

export const MenuButton = styled.button`
  position: absolute;
  top: 2.5rem;
  left: 22rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; 
  z-index: 1000;
`;

export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: var(--white-100);
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const NavContentModal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.87rem;

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`;

export const NavItemModal = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${({ selected }) =>
    selected ? "var(--orange-100)" : "transparent"};
  color: ${({ selected }) => (selected ? "#fff" : "#252525")};
  cursor: pointer;
  border-radius: 8px;

  a {
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1;
    vertical-align: middle;
    letter-spacing: 0%;
    color: ${(props) => (props.selected ? "#fff" : "var(--black-100)")};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  gap: 5px;

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-top: 2.37rem;
  }

  .footer-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 3.875rem;
  }

  .footer-action-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: var(--black-100);

    span {
      font-family: Roboto, sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
    }

    a {
      font-family: Roboto, sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      color: var(--black-100);
      text-decoration: none;
    }
  }
`;

export const TextModal = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.2;
  color: var(--black-100);
  margin: 0;
`;

export const FunctionTextModal = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.687rem;
  font-weight: 400;
  line-height: 1.2;
  color: #00000080;
  margin: 0;
`;