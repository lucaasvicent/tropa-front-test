import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import styled from "styled-components";

interface StatusDotProps {
  $status: "Ativo" | "Inativo";
}

export const Container = styled.div`
  width: 93%;
  background: var(--white-100);
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  height: 15.06rem;
  align-items: center;
  font-family: Roboto, sans-serif;

  @media (max-width: 786px) {
    width: 85%;
    display: block ;
    height: 33%;

    .menu-toggle {
      display: none;
    }
  }
`;

export const ComponentContent = styled.div`
  width: 100%;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  gap: 4rem;

  @media (max-width: 786px) {
    justify-content: space-between;
} 
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 200px;

  @media (max-width: 786px) {
    width: 30%;
} 
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.25rem; 
  border: none;
  border-radius: 1rem;
  width: 100%;
  background: var(--white-200);

  &:focus {
    outline: none;
    border-color: none;
    box-shadow: 0 0 0 2px var(--orange-300);
  }
`;

export const SearchIcon = styled(MagnifyingGlassIcon)`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: var(--gray-200);
`;


export const InsertButton = styled.button`
  background-color: var(--orange-300);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 0.5rem;
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: -2.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--gray-200);
  padding: 0;

  &:hover {
    color: var(--orange-300);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--orange-200);
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 0;
  color: var(--orange-200);

  @media (max-width: 786px) {
    font-size: 0.85rem;
    width: 35%;
    padding: none;
    text-align: center;
}
`;

export const TableCell = styled.td`
  padding: 0.75rem 0;
  vertical-align: middle;
  color: var(--gray-100);
  
  @media (max-width: 786px) {
    padding: 0.5rem 0;
    font-size: 0.75rem;
    text-align: center;
  }
`;

export const StatusDot = styled.span<StatusDotProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ $status }) => ($status === "Ativo" ? "#2cd03d" : "#d02c2c")};

  @media (max-width: 786px) {
    margin-right: 0;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    background: var(--white-200);
    border: var(--white-200);
    margin-left: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    cursor: pointer;

    &.active {
      background: var(--orange-300);
      color: white;
      border: none;
    }
  }
`;

export const ModalOptions = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  background-color: var(--white-100);
  border: 1px solid var(--white-200);
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 0.5rem;
`;

export const ModalButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  text-align: left;
  cursor: not-allowed;
  color: var(--gray-100);
  font-weight: bold;

  &:hover {
    background-color: var(--white-200);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


export const SkeletonBox = styled.div`
  background: var(--gray-90);
  border-radius: 0.5rem;
  animation: pulse 1.5s infinite ease-in-out;
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

export const SkeletonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 1rem;
`;

export const SkeletonSearch = styled(SkeletonBox)`
  height: 2.5rem;
  width: 200px;
`;

export const SkeletonButton = styled(SkeletonBox)`
  height: 2.5rem;
  width: 120px;
`;

export const SkeletonRow = styled(SkeletonBox)`
  height: 1.25rem;
  margin: 0.75rem 0;
  width: 100%;
`;

export const SkeletonPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const SkeletonPageButton = styled(SkeletonBox)`
  height: 2rem;
  width: 2rem;
  border-radius: 100px;
`;
