import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
`;

const SkeletonBlock = styled.div<{ width?: string; height?: string }>`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #e9ecef 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 8px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
`;

export const SkeletonContainer = styled.div`
  width: 13.68rem;
  height: 100vh;
  background: var(--white-100);
  display: flex;
  flex-direction: column;
  padding: 1.56rem;
  gap: 1.5rem;
`;

export const SkeletonLogo = styled(SkeletonBlock)`
  width: 100px;
  height: 25px;
`;

export const SkeletonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkeletonTitle = styled(SkeletonBlock)`
  width: 40%;
  height: 10px;
`;

export const SkeletonItem = styled(SkeletonBlock)`
  width: 100%;
  height: 40px;
`;

export const SkeletonFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonAvatar = styled(SkeletonBlock)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const SkeletonTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const SkeletonLine = styled(SkeletonBlock)<{ width: string }>`
  width: ${(props) => props.width};
  height: 10px;
`;

export const SkeletonAction = styled(SkeletonBlock)`
  width: 100%;
  height: 20px;
`;
