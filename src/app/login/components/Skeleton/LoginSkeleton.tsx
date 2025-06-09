'use client'

import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: var(--background);
`;

const SkeletonCard = styled.div`
  display: flex;
  width: 47.28rem;
  height: 31.125rem;
  border-radius: 1.25rem;
  background: var(--white-100);
  padding: 1rem;
  box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 21.18rem;
    flex-direction: column;
    align-items: center;
  }
`;

const SkeletonFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.6875rem;
  height: 24.25rem;
  gap: 1rem;
`;

const SkeletonBase = styled.div`
  background: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SkeletonLogo = styled(SkeletonBase)`
  width: 10rem;
  height: 1.5rem;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 12rem;
  height: 1.8rem;
`;

const SkeletonSubtitle = styled(SkeletonBase)`
  width: 14rem;
  height: 1rem;
`;

const SkeletonInput = styled(SkeletonBase)`
  width: 100%;
  height: 2.5rem;
`;

const SkeletonButton = styled(SkeletonBase)`
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
`;

const SkeletonImageSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 24.84rem;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 357px;
  height: 315px;
  border-radius: 20px;
`;


export default function LoginSkeleton() {
  return (
    <SkeletonContainer>
      <SkeletonCard>
        <SkeletonFormWrapper>
          <SkeletonLogo />
          <SkeletonTitle />
          <SkeletonSubtitle />
          <SkeletonInput />
          <SkeletonInput />
          <SkeletonButton />
        </SkeletonFormWrapper>

        <SkeletonImageSection>
          <SkeletonImage />
        </SkeletonImageSection>
      </SkeletonCard>
    </SkeletonContainer>
  );
}
