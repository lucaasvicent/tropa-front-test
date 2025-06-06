import styled from "styled-components";

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background-home);
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavLeft = styled.div`
  width: 13.68rem;
  height: 100vh;
  background: var(--white-100);
  justify-content: center;
  display: flex;
`;

export const NavContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.87rem;
  padding: 1.56rem;

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`;

export const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${({ selected }) => (selected ? "var(--orange-100)" : "transparent")};
  color: ${({ selected }) => (selected ? "#fff" : "#252525")};
  cursor: pointer;
  border-radius: 8px;

  a {
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    vertical-align: middle;
    letter-spacing: 0%;
    color: ${props => (props.selected ? '#fff' : 'var(--black-100)')};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const NavTitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.56rem;
  font-weight: 800;
  line-height: 15px;
  letter-spacing: 12%;
  color: var(--gray-200);
`;
