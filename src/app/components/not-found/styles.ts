import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #1f1c2c;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const HomeButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #6c63ff;
  color: white;
  font-weight: 500;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #5548d9;
  }
`;