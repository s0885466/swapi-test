import Skeleton from '@mui/material/Skeleton';

export const PersonLinkSkeleton = () => (
  <Skeleton
    height={24}
    width={300}
    variant="rectangular"
    data-testid="PersonLinkSkeleton"
  />
);
