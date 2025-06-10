"use client";

import { SkeletonAction, SkeletonAvatar, SkeletonContainer, SkeletonFooter, SkeletonItem, SkeletonLine, SkeletonLogo, SkeletonSection, SkeletonTextGroup, SkeletonTitle } from "./styles";

export default function SidebarSkeleton() {
  return (
    <SkeletonContainer>
      <SkeletonLogo />
      <SkeletonSection>
        <SkeletonTitle />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </SkeletonSection>
      <SkeletonFooter>
        <SkeletonAvatar />
        <SkeletonTextGroup>
          <SkeletonLine width="70%" />
          <SkeletonLine width="40%" />
        </SkeletonTextGroup>
        <SkeletonAction />
        <SkeletonAction />
      </SkeletonFooter>
    </SkeletonContainer>
  );
}
