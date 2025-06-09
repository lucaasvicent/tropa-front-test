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
  background-color: ${({ selected }) =>
    selected ? "var(--orange-100)" : "transparent"};
  color: ${({ selected }) => (selected ? "#fff" : "#252525")};
  cursor: pointer;
  border-radius: 8px;

  a {
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1;
    vertical-align: middle;
    letter-spacing: 0%;
    color: ${(props) => (props.selected ? "#fff" : "var(--black-100)")};
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

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  gap: 5px;
  border-top: 1px solid var(--gray-200);

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
    margin-bottom: 1.875rem;
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
      font-weight: bold;;
    }

    a {
      font-family: Roboto, sans-serif;
      font-size: 0.875rem;
      font-weight: bold;;
      color: var(--black-100);
      text-decoration: none;
    }
  }
`;

export const NavTextFooter = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.2;
  color: var(--black-100);
  margin: 0;
`;

export const FunctionText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.687rem;
  font-weight: 400;
  line-height: 1.2;
  color: #00000080;
  margin: 0;
`;
