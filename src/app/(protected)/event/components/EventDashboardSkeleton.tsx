import {
  SkeletonHeader,
  SkeletonSearch,
  SkeletonButton,
  SkeletonRow,
  SkeletonPagination,
  SkeletonPageButton,
  ComponentContent,
  Container,
} from "./styles";

export default function EventDashboardSkeleton() {
  return (
    <Container>
      <ComponentContent>
        <SkeletonHeader>
          <SkeletonSearch />
          <SkeletonButton />
        </SkeletonHeader>

        {[...Array(4)].map((_, i) => (
          <SkeletonRow key={i} />
        ))}

        <SkeletonPagination>
          {[...Array(3)].map((_, i) => (
            <SkeletonPageButton key={i} />
          ))}
        </SkeletonPagination>
      </ComponentContent>
    </Container>
  );
}
