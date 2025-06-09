import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";

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
`;

export const ComponentContent = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  gap: 4rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.25rem; 
  border: 1px solid #ccc;
  border-radius: 1rem;
  width: 100%;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: #999;
`;


export const InsertButton = styled.button`
  background-color: #d05c2e;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 0;
  color: var(--orange-200);
`;

export const TableCell = styled.td`
  padding: 0.75rem 0;
  vertical-align: middle;
  color: var(--gray-100);
`;

export const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #2cd03d;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    background: #fff;
    border: 1px solid #ccc;
    margin-left: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    cursor: pointer;

    &.active {
      background: #d05c2e;
      color: white;
      border: none;
    }
  }
`;
